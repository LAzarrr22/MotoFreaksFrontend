import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {CommonComponentsService} from "../../../common/common.service";
import {CarsApiService} from "../service/cars-api.service";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {
  ADD_COMPANY,
  ADD_GENERATION,
  ADD_MODEL,
  AddCompany,
  AddCompanySuccess,
  AddGeneration,
  AddGenerationSuccess, AddItemFail,
  AddModel,
  AddModelSuccess,
  DELETE_COMPANY,
  DELETE_GENERATION,
  DELETE_MODEL,
  DeleteCompany,
  DeleteCompanySuccess,
  DeleteGeneration,
  DeleteGenerationSuccess,
  DeleteItemFail,
  DeleteModel,
  DeleteModelSuccess,
  GET_ALL_COMPANIES,
  GET_GENERATIONS,
  GET_MODELS,
  GetAllCompaniesFail,
  GetAllCompaniesSuccess,
  GetGenerations,
  GetGenerationsFail,
  GetGenerationsSuccess,
  GetModels,
  GetModelsFail,
  GetModelsSuccess
} from "../action/cars.action";
import {catchError, switchMap} from "rxjs/operators";

@Injectable()
export class CarsEffects {
  constructor(private actions$: Actions, private errorService: CommonComponentsService,
              private carsService: CarsApiService, private store$: Store) {
  }

  @Effect()
  getCompanies$: Observable<Action> = this.actions$
    .pipe(ofType(GET_ALL_COMPANIES),
      switchMap(() => {
        return this.carsService.getCompanies();
      }),
      switchMap((companies: string[]) => [
        new GetAllCompaniesSuccess(companies),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllCompaniesFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  getModels$: Observable<Action> = this.actions$
    .pipe(ofType(GET_MODELS),
      switchMap((action: GetModels) => {
        return this.carsService.getModels(action.company);
      }),
      switchMap((models: string[]) => [
        new GetModelsSuccess(models),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetModelsFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  getGeneration$: Observable<Action> = this.actions$
    .pipe(ofType(GET_GENERATIONS),
      switchMap((action: GetGenerations) => {
        return this.carsService.getGenerations(action.company, action.model);
      }),
      switchMap((generations: string[]) => [
        new GetGenerationsSuccess(generations),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetGenerationsFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  addCompany$: Observable<Action> = this.actions$
    .pipe(ofType(ADD_COMPANY),
      switchMap((action: AddCompany) => {
        return this.carsService.addCompany(action.company);
      }),
      switchMap((companies: string[]) => [
        new AddCompanySuccess(companies),
        new AddItemFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new AddItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  addModel$: Observable<Action> = this.actions$
    .pipe(ofType(ADD_MODEL),
      switchMap((action: AddModel) => {
        return this.carsService.addModel(action.company, action.model);
      }),
      switchMap((models: string[]) => [
        new AddModelSuccess(models),
        new AddItemFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new AddItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  addGeneration$: Observable<Action> = this.actions$
    .pipe(ofType(ADD_GENERATION),
      switchMap((action: AddGeneration) => {
        return this.carsService.addGeneration(action.company, action.model, action.generation);
      }),
      switchMap((generations: string[]) => [
        new AddGenerationSuccess(generations),
        new AddItemFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new AddItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

@Effect()
  deleteCompany$: Observable<Action> = this.actions$
    .pipe(ofType(DELETE_COMPANY),
      switchMap((action: DeleteCompany) => {
        return this.carsService.deleteCompany(action.company);
      }),
      switchMap((companies: string[]) => [
        new DeleteCompanySuccess(companies),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new DeleteItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  deleteModel$: Observable<Action> = this.actions$
    .pipe(ofType(DELETE_MODEL),
      switchMap((action: DeleteModel) => {
        return this.carsService.deleteModel(action.company, action.model);
      }),
      switchMap((models: string[]) => [
        new DeleteModelSuccess(models),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new DeleteItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  deleteGeneration$: Observable<Action> = this.actions$
    .pipe(ofType(DELETE_GENERATION),
      switchMap((action: DeleteGeneration) => {
        return this.carsService.deleteGeneration(action.company, action.model, action.generation);
      }),
      switchMap((generations: string[]) => [
        new DeleteGenerationSuccess(generations),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new DeleteItemFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

}
