import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../../cars/logic/service/cars.service";

@Component({
  selector: 'app-challenges-filter',
  templateUrl: './challenges-filter.component.html',
  styleUrls: ['./challenges-filter.component.scss']
})
export class ChallengesFilterComponent implements OnInit {

  formFilter: FormGroup;
  companies: string[];
  models: string[]
  generations: string[];
  @Output()
  applyFilterEvent = new EventEmitter<Map<string, string>>();
  @Output()
  clearFilterEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.formFilter = this.formBuilder.group({
      company: new FormControl(''),
      model: new FormControl(''),
      generation: new FormControl('')
    });
    this.loadCompaniesList();
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

  getCompany() {
    return this.formFilter.controls.company.value;
  }

  getModel() {
    return this.formFilter.controls.model.value;
  }

  getGeneration() {
    return this.formFilter.controls.generation.value;
  }

  companySelectionChange() {
    this.loadModelsList();
    this.formFilter.controls.model.reset('');
    this.formFilter.controls.generation.reset('');
  }

  modelSelectionChange() {
    this.loadGenerationsList();
    this.formFilter.controls.generation.reset('');
  }

  submit() {
    this.applyFilterEvent.emit(null)
    console.log('test')
  }

  clearFilter() {
    this.clearFilterEvent.emit()
  }
}
