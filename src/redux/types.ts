// action types
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_MOVES = "GET_MOVES";
export const GET_SPECIES = "GET_SPECIES";
export const GET_TYPES = "GET_TYPES";
export const GET_ITEMS = "GET_ITEMS";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
export const SET_ALERT = "SET_ALERT";

// data interfaces
export interface Alerts {
  message: string;
}

export interface Pokemon {
  name: string;
  weight: number;
  height: number;
  baseExperience: number;
  id: number;
  abilities: Array<string>;
  species: Species;
  sprites: {
    back_default: string;
    front_default: string;
    versions: {
      ["generation-v"]: {
        ["black-white"]: {
          animated: {
            back_default: string | undefined;
            front_default: string | undefined;
          };
        };
      };
    };
  };
}

export interface Move {
  accuracy: number;
  name: string;
  power: number;
  pp: number;
  priority: number;
  damageClass: string;
  type: string;
}

export interface Species {
  baseHappiness: number;
  captureRate: number;
  color: string;
  name: string;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  formsSwitchable: boolean;
  growthRate: string;
  habitat: string;
  shape: string;
}

export interface Type {
  damageRelations: {
    doubleDamageFrom: Array<string> | null;
    doubleDamageTo: Array<string> | null;
    halfDamageFrom: Array<string> | null;
    halfDamageTo: Array<string> | null;
    noDamageFrom: Array<string> | null;
    noDamageTo: Array<string> | null;
  };
  moveDamageClass: string;
  name: string;
}

export interface Item {
  name: string;
  cost: number;
  attributes: Array<string>;
  sprites: string;
}

export interface PokemonState {
  moves: Move[];
  species: Species[];
  types: Type[];
  items: Item[];
  detail: Pokemon | null;
  loading: boolean;
  pokemons: Pokemon[];
  alerts: string;
}

// actions interfaces
interface GetPokemonsAction {
  type: typeof GET_POKEMONS;
  payload: Pokemon[];
}

interface GetMovesAction {
  type: typeof GET_MOVES;
  payload: Move[];
}

interface GetSpeciesAction {
  type: typeof GET_SPECIES;
  payload: Species[];
}

interface GetTypesAction {
  type: typeof GET_TYPES;
  payload: Type[];
}

interface GetItemsAction {
  type: typeof GET_ITEMS;
  payload: Item[];
}

interface GetDetailAction {
  type: typeof GET_DETAIL;
  payload: Pokemon;
}

interface SearchAction {
  type: typeof SEARCH;
  payload: Pokemon[];
}

interface SetAlert {
  type: typeof SET_ALERT;
  payload: string;
}

interface SetLoading {
  type: typeof LOADING;
}

export type Actions =
  | GetPokemonsAction
  | GetMovesAction
  | GetSpeciesAction
  | GetTypesAction
  | GetItemsAction
  | GetDetailAction
  | SearchAction
  | SetAlert
  | SetLoading;
