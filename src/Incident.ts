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

  solve() {
    this.status = 'solved';
    this.solvedAt = new Date();
  }

  getSolutionTime(): number | null {
    if (this.status === 'solved' && this.solvedAt) {
      return (this.solvedAt.getTime() - this.createdAt.getTime()) / 1000;
    }
    return null;
  }
}
