export class CarModel {
  name: string
  registration: string
  company: string
  model: string
  generation: string
  year: number
  color: string
  engine: string


  constructor(name: string, registration: string, company: string, model: string, generation: string, year: number, color: string, engine: string) {
    this.name = name;
    this.registration = registration;
    this.company = company;
    this.model = model;
    this.generation = generation;
    this.year = year;
    this.color = color;
    this.engine = engine;
  }
}
