class Store {
  incidents: Incident[];

  constructor() {
    this.incidents = [];
  }

  createIncident(description: string): Incident {  // Método para crear un incidente
    const incident = new Incident(this.incidents.length + 1, description);
    this.incidents.push(incident);
    return incident;
  }
}