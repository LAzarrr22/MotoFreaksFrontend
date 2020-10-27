import {QuestionAnswer} from "../response/question-answer.model";

export class NewChallengeModel {
  name: string
  company: string
  model: string
  generation: string
  qaList: QuestionAnswer[];
}
