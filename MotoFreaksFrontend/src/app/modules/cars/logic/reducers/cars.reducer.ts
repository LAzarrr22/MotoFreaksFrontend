import {
  GET_ALL_COMPANIES,
  GET_ALL_COMPANIES_FAIL,
  GET_ALL_COMPANIES_SUCCESS,
  GET_GENERATIONS,
  GET_GENERATIONS_FAIL,
  GET_GENERATIONS_SUCCESS,
  GET_MODELS,
  GET_MODELS_FAIL,
  GET_MODELS_SUCCESS
} from "../action/cars.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface CarsState {
  companies: string[];
  models: string[];
  generation: string[];
  loading: boolean;
}

export const INITIAL_STATE: CarsState = {
  companies: null,
  models: null,
  generation: null,
  loading: false
}

export function reducer(state: CarsState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_COMPANIES:
    case GET_MODELS:
    case GET_GENERATIONS:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_COMPANIES_SUCCESS:
      return {
        companies: action.payload,
        loading: false
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false
      };
    case GET_GENERATIONS_SUCCESS:
      return {
        ...state,
        generation: action.payload,
        loading: false
      };
    case GET_ALL_COMPANIES_FAIL:
    case GET_MODELS_FAIL:
    case GET_GENERATIONS_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }

}

export const stateCompanies = (state) => state.companies;
export const stateModels = (state) => state.models;
export const stateGeneration = (state) => state.generation;

const fromCarsState = createFeatureSelector<CarsState>('cars');
export const getCompanies = createSelector(fromCarsState, stateCompanies);
export const getModels = createSelector(fromCarsState, stateModels);
export const getGenerations = createSelector(fromCarsState, stateGeneration);
