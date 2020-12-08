import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewChallengeModel} from "../../logic/dto/request/new-challenge.model";
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../../cars/logic/service/cars.service";
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {ChallengesApiService} from "../../logic/services/challenges-api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-create-merge-general',
  templateUrl: './create-general.component.html',
  styleUrls: ['./create-general.component.scss']
})
export class CreateGeneralComponent implements OnInit {

  @Output()
  addNew = new EventEmitter<NewChallengeModel>()
  @Output()
  mergeEvn = new EventEmitter<NewChallengeModel>()
  @Input()
  challengeToMerge: ChallengeDtoModel;
  @Input()
  questionsListToMerge: QuestionAnswer[];
  @Input()
  isMerge: boolean;

  currentQuestions: QuestionAnswer[] = [];
  formBasic: FormGroup;
  companies: string[];
  models: string[]
  generations: string[];
  isAddQuestion: boolean = false;
  isMergeSelectedQuestion: boolean;
  showNameError: boolean = false;
  questionToMerge: QuestionAnswer;


  constructor(private router: Router, private formBuilder: FormBuilder,
              private carsService: CarsService, private challengesApiService: ChallengesApiService) {
  }

  ngOnInit(): void {
    this.loadCompaniesList();
    this.formBasic = this.formBuilder.group({
      name: new FormControl(this.isMerge ? this.challengeToMerge.name : '', [Validators.required]),
      company: new FormControl(this.isMerge ? this.challengeToMerge.company : ''),
      model: new FormControl(this.isMerge ? this.challengeToMerge.model : ''),
      generation: new FormControl(this.isMerge ? this.challengeToMerge.generation : ''),
      general: new FormControl(this.isMerge ? this.challengeToMerge.general : '')
    })

    if (this.isMerge) {
      this.questionsListToMerge.forEach(question => {
        this.currentQuestions = [...this.currentQuestions, new QuestionAnswer(question.question, question.points, question.answers, question.correctAnswer)]
      });
      this.loadModelsList()
      this.loadGenerationsList()
    }

  }

  submitForm(event: EventEmitter<any>) {
    if (!this.checkName() && this.formBasic.valid && this.currentQuestions.length > 0) {
      if (this.isGeneral()) {
        event.emit(new NewChallengeModel(this.getName(), this.isGeneral(), null, null,
          null, this.currentQuestions))
      } else {
        event.emit(new NewChallengeModel(this.getName(), this.isGeneral(), this.getCompany(), this.getModel(),
          this.getGeneration(), this.currentQuestions))
      }
    }
  }

  checkName(){
    this.challengesApiService.getValidationNameApi(this.getName()).pipe().subscribe(response=>this.showNameError=response);
    return this.showNameError
  }

  addQuestion(question: QuestionAnswer) {
    this.currentQuestions = [...this.currentQuestions, question]
    this.openCreateQuestion();
  }

  mergeQuestionOpenEditor(question: QuestionAnswer) {
    this.questionToMerge = question;
    this.isMergeSelectedQuestion = true;
  }

  mergeQuestionAtList(mergeElement: QuestionAnswer) {
    this.isMergeSelectedQuestion = false;
    const index: number = this.currentQuestions.indexOf(this.questionToMerge);
    if (index !== -1) {
      this.currentQuestions[index] = mergeElement;
    }
    this.questionToMerge = null;
  }

  deleteQuestion(question: QuestionAnswer) {
    const index: number = this.currentQuestions.indexOf(question);
    if (index !== -1) {
      this.currentQuestions.splice(index, 1);
    }
  }

  goToAllChallenges() {
    this.router.navigate([AppPath.CHALLENGES_ALL_PATH])
  }

  loadCompaniesList() {
    this.carsService.getCompaniesList().subscribe(companies => {
      this.companies = companies
    })
  }

  loadModelsList() {
    this.carsService.getModelsList(this.getCompany()).subscribe(models => {
      this.models = models;
    })
  }

  loadGenerationsList() {
    this.carsService.getGenerationList(this.getCompany(), this.getModel()).subscribe(generations => {
      this.generations = generations;
    })
  }

  getName() {
    return this.formBasic.controls.name.value;
  }

  getCompany() {
    return this.formBasic.controls.company.value;
  }

  getModel() {
    return this.formBasic.controls.model.value;
  }

  getGeneration() {
    return this.formBasic.controls.generation.value;
  }

  isGeneral() {
    return this.formBasic.controls.general.value;
  }

  companySelectionChange() {
    this.loadModelsList();
    this.formBasic.controls.model.reset('');
    this.formBasic.controls.generation.reset('');
  }

  modelSelectionChange() {
    this.loadGenerationsList();
    this.formBasic.controls.generation.reset('');
  }

  openCreateQuestion() {
    this.isAddQuestion = !this.isAddQuestion;
  }
}
