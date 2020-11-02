import {Action} from "@ngrx/store";

export const GET_ALL_COMPANIES = '[Cars] GET_ALL_COMPANIES';
export const GET_ALL_COMPANIES_SUCCESS = '[Cars] GET_ALL_COMPANIES_SUCCESS';
export const GET_ALL_COMPANIES_FAIL = '[Cars] GET_ALL_COMPANIES_FAIL';

export const GET_MODELS = '[Cars] GET_MODELS';
export const GET_MODELS_SUCCESS = '[Cars] GET_MODELS_SUCCESS';
export const GET_MODELS_FAIL = '[Cars] GET_MODELS_FAIL';

export const GET_GENERATIONS = '[Cars] GET_GENERATIONS';
export const GET_GENERATIONS_SUCCESS = '[Cars] GET_GENERATIONS_SUCCESS';
export const GET_GENERATIONS_FAIL = '[Cars] GET_GENERATIONS_FAIL';

export class GetAllCompanies implements Action {
  readonly type = GET_ALL_COMPANIES;

  constructor() {
  }
}

export class GetAllCompaniesSuccess implements Action {
  readonly type = GET_ALL_COMPANIES_SUCCESS;

  constructor(public payload: string[]) {
  }
}

export class GetAllCompaniesFail implements Action {
  readonly type = GET_ALL_COMPANIES_FAIL;

  constructor(public payload: string) {
  }
}

export class GetModels implements Action {
  readonly type = GET_MODELS;

  constructor(public company: string) {
  }
}

export class GetModelsSuccess implements Action {
  readonly type = GET_MODELS_SUCCESS;

  constructor(public payload: string[]) {
  }
}

export class GetModelsFail implements Action {
  readonly type = GET_MODELS_FAIL;

  constructor(public payload: string) {
  }
}

export class GetGenerations implements Action {
  readonly type = GET_GENERATIONS;

  constructor(public company: string, public model: string) {
  }
}

export class GetGenerationsSuccess implements Action {
  readonly type = GET_GENERATIONS_SUCCESS;

  constructor(public payload: string[]) {
  }
}

export class GetGenerationsFail implements Action {
  readonly type = GET_GENERATIONS_FAIL;

  constructor(public payload: string) {
  }
}



