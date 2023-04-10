# Incident Manager

Este proyecto implementa un administrador simple de incidentes con Typescript para Frogmi.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/farriagadal/incident-manager.git
```

2. Instalar dependencias:

```bash
cd store-incident-manager
npm install
```


## Ejecución de pruebas

```bash
npm test
```


## Uso

### Crear una nueva tienda

```typescript
import { Store } from './store';

const store = new Store();
```

### Crear un nuevo incidente

```typescript
const incident = store.createIncident('Floor is dirty');
```
### Resolver un incidente
```typescript
incident.solve();
```
### Obtener el estado de los incidentes entre dos fechas
```typescript
const startDate = new Date('2023-01-01');
const endDate = new Date('2023-01-31');
const incidentStatus = store.incident_status(startDate, endDate);
```
