import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CarsState, getCompanies, getGenerations, getModels} from "../reducers/cars.reducer";
import {
  AddCompany,
  AddGeneration,
  AddModel,
  DeleteCompany, DeleteGeneration, DeleteModel,
  GetAllCompanies,
  GetGenerations,
  GetModels
} from "../action/cars.action";

@Injectable()
export class CarsService {
  constructor(private store: Store<CarsState>) {
  }

  getCompaniesList() {
    this.store.dispatch(new GetAllCompanies());
    return this.store.select(getCompanies);
  }

  getModelsList(company: string) {
    this.store.dispatch(new GetModels(company));
    return this.store.select(getModels);
  }

  getGenerationList(company: string, model: string) {
    this.store.dispatch(new GetGenerations(company, model));
    return this.store.select(getGenerations);
  }

  addCompany(company: string) {
    this.store.dispatch(new AddCompany(company));
    return this.store.select(getCompanies);
  }

  addModel(company: string, model: string) {
    this.store.dispatch(new AddModel(company, model));
    return this.store.select(getModels);
  }

  addGeneration(company: string, model: string, generation: string) {
    this.store.dispatch(new AddGeneration(company, model, generation));
    return this.store.select(getGenerations);
  }

  deleteCompany(company: string) {
    this.store.dispatch(new DeleteCompany(company));
    return this.store.select(getCompanies);
  }

  deleteModel(company: string, model: string) {
    this.store.dispatch(new DeleteModel(company, model));
    return this.store.select(getModels);
  }

  deleteGeneration(company: string, model: string, generation: string) {
    this.store.dispatch(new DeleteGeneration(company, model, generation));
    return this.store.select(getGenerations);
  }
}
