export class QuestionAnswer {
  question: string;
  points: number;
  answers: string[];
  correctAnswer: string;


  constructor(question: string, points: number, answers: string[], correctAnswer: string) {
    this.question = question;
    this.points = points;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
