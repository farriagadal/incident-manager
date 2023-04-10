import { Store } from '../src/Store';

describe('Store', () => {

  test('Debería crear un nuevo incidente llamado "New incident"', () => {
    const store = new Store();
    const incident = store.createIncident('New incident');
    expect(incident.description).toBe('New incident');
    expect(incident.status).toBe('open');
  });
})
