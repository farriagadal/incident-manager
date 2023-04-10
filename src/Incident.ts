class Incident {
  id: number;
  description: string;
  status: 'open' | 'solved';
  createdAt: Date;
  solvedAt: Date | null;

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
    this.status = 'open';
    this.createdAt = new Date();
    this.solvedAt = null;
  }
}
