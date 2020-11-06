import {QuestionAnswer} from "../response/question-answer.model";

export class NewChallengeModel {
  name: string
  company: string
  model: string
  generation: string
  qaList: QuestionAnswer[];


  constructor(name: string, company: string, model: string, generation: string, qaList: QuestionAnswer[]) {
    this.name = name;
    this.company = company;
    this.model = model;
    this.generation = generation;
    this.qaList = qaList;
  }
}
