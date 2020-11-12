import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NewChallengeModel} from "../../logic/dto/request/new-challenge.model";
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../../cars/logic/service/cars.service";

@Component({
  selector: 'app-create-general',
  templateUrl: './create-general.component.html',
  styleUrls: ['./create-general.component.scss']
})
export class CreateGeneralComponent implements OnInit {

  @Output()
  addNew = new EventEmitter<NewChallengeModel>()

  currentQuestions: QuestionAnswer[]=[];
  formBasic: FormGroup;
  companies: string[];
  models: string[]
  generations: string[];
  isAddQuestion:boolean=false;


  constructor(private router: Router, private formBuilder: FormBuilder,
              private carsService:CarsService) { }

  ngOnInit(): void {
    this.loadCompaniesList();
    this.formBasic = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      company: new FormControl(''),
      model: new FormControl('' ),
      generation: new FormControl(''),
      general:new FormControl('')
    })
  }

  createChallenge(){
    console.dir(this.isGeneral())
    if(this.formBasic.valid && this.currentQuestions.length>0){
      if(this.isGeneral()){
        this.addNew.emit(new NewChallengeModel(this.getName(), this.isGeneral(),null,null,
          null,this.currentQuestions))
      }else{
        this.addNew.emit(new NewChallengeModel(this.getName(), this.isGeneral(),this.getCompany(),this.getModel(),
          this.getGeneration(),this.currentQuestions))
      }

    }
  }
  addQuestion(question: QuestionAnswer){

    this.currentQuestions=[...this.currentQuestions, question]
    this.openCreateQuestion();
  }
  deleteQuestion(question: QuestionAnswer){
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
    this.isAddQuestion=!this.isAddQuestion;
  }
}
