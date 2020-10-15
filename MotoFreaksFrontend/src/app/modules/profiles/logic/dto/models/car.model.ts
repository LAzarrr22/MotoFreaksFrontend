export class CarModel {
  id: string;
  createdDate: Date;
  updatedDate: Date;
  name: string
  registration: string
  company: string
  model: string
  generation: string
  year: number
  color: string
  engine: string
  horsepower: number;
  torque: number;


  constructor(id: string, createdDate: Date, updatedDate: Date, name: string, registration: string, company: string, model: string, generation: string, year: number, color: string, engine: string, horsepower: number, torque: number) {
    this.id = id;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.name = name;
    this.registration = registration;
    this.company = company;
    this.model = model;
    this.generation = generation;
    this.year = year;
    this.color = color;
    this.engine = engine;
    this.horsepower = horsepower;
    this.torque = torque;
  }
}
