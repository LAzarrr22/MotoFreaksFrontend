import {QuestionAnswer} from "./question-answer.model";

export class ChallengeModel {

  id: string
  name: string
  createdDate: Date
  company: string
  model: string
  generation: string
  creatorId: string
  qaList: QuestionAnswer[];
}
