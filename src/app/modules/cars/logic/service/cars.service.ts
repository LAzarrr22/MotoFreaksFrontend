import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CarsState, getCompanies, getGenerations, getModels} from "../reducers/cars.reducer";
import {GetAllCompanies, GetGenerations, GetModels} from "../action/cars.action";

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
}
