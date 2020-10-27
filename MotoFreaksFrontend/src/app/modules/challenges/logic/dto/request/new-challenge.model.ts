import {QuestionAnswer} from "../models/question-answer.model";

export class NewChallengeModel {
  name: string
  company: string
  model: string
  generation: string
  QAList: QuestionAnswer[];
}
