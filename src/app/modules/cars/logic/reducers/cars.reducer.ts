import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_GENERATION,
  ADD_GENERATION_SUCCESS, ADD_ITEM_FAIL,
  ADD_MODEL,
  ADD_MODEL_SUCCESS,
  DELETE_COMPANY,
  DELETE_COMPANY_SUCCESS,
  DELETE_GENERATION,
  DELETE_GENERATION_SUCCESS, DELETE_ITEM_FAIL,
  DELETE_MODEL,
  DELETE_MODEL_SUCCESS,
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
import {USER_LOGOUT} from "../../../authentication/logic/actions/authentication.actions";

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
    case ADD_COMPANY:
    case ADD_MODEL:
    case ADD_GENERATION:
    case DELETE_COMPANY:
    case DELETE_MODEL:
    case DELETE_GENERATION:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_COMPANIES_SUCCESS:
    case ADD_COMPANY_SUCCESS:
    case DELETE_COMPANY_SUCCESS:
      return {
        companies: action.payload,
        loading: false
      };
    case GET_MODELS_SUCCESS:
    case ADD_MODEL_SUCCESS:
    case DELETE_MODEL_SUCCESS:
      return {
        ...state,
        models: action.payload,
        loading: false
      };
    case GET_GENERATIONS_SUCCESS:
    case ADD_GENERATION_SUCCESS:
    case DELETE_GENERATION_SUCCESS:
      return {
        ...state,
        generation: action.payload,
        loading: false
      };
    case GET_ALL_COMPANIES_FAIL:
    case GET_MODELS_FAIL:
    case GET_GENERATIONS_FAIL:
    case ADD_ITEM_FAIL:
    case DELETE_ITEM_FAIL:
      return {
        ...state,
        loading: false
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

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
