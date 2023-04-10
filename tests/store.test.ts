import { Store } from '../src/Store';
import { Incident } from '../src/Incident';

describe('Store', () => {

  test('Debería crear un nuevo incidente llamado "New incident"', () => {
    const store = new Store();
    const incident = store.createIncident('New incident');
    expect(incident.description).toBe('New incident');
    expect(incident.status).toBe('open');
  });

  test('Verificar si un incidente está resuelto', () => {
    const incident = new Incident(1, 'Incidente 1');
    expect(incident.isSolved()).toBe(false);
    incident.solve();
    expect(incident.isSolved()).toBe(true);
  });

  test('Verificar que le fecha se cree correctamente al resolver un incidente', () => {
    const incident = new Incident(1, 'Incidente 1');
    const dateNow = new Date();

    incident.solve();
    expect(incident.solvedAt?.getDay()).toBe(dateNow.getDay());
    expect(incident.solvedAt?.getMonth()).toBe(dateNow.getMonth());
    expect(incident.solvedAt?.getFullYear()).toBe(dateNow.getFullYear());
  });
})
