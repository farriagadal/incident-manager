import { Incident } from './Incident';

export class Store {
  incidents: Incident[];

  constructor() {
    this.incidents = [];
  }

  createIncident(description: string): Incident {  // Método para crear un incidente
    const incident = new Incident(this.incidents.length + 1, description);
    this.incidents.push(incident);
    return incident;
  }

  
  incident_status(startDate: Date, endDate: Date) {  // Método para calcular estadísticas de incidentes entre dos fechas
    let openCases = 0;
    let closedCases = 0;
    let totalSolutionTime = 0;
    let maximumSolution = 0;

    for (const incident of this.incidents) {
      if (incident.createdAt >= startDate && incident.createdAt <= endDate) {
        if (incident.status === 'open') {
          openCases++;
          const solutionTime = (new Date().getTime() - incident.createdAt.getTime()) / 1000;
          maximumSolution = Math.max(maximumSolution, solutionTime);
        } else {
          closedCases++;
          const solutionTime = incident.getSolutionTime() as number;
          totalSolutionTime += solutionTime;
          maximumSolution = Math.max(maximumSolution, solutionTime);
        }
      }
    }

    return {
      open_cases: openCases,
      closed_cases: closedCases,
      average_solution: closedCases > 0 ? totalSolutionTime / closedCases : 0,
      maximum_solution: maximumSolution,
    };
  }
}