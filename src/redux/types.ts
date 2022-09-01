// action types
export const GET_POKEMONS = "GET_POKEMONS";
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
  base_experience: number;
  id: number;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
    slot: number;
  }>;
  held_items: Array<{
    item: {
      name: string;
    };
    version_details: Array<{
      rarity: number;
      version: { name: string };
    }>;
  }>;
  moves: Array<{
    move: {
      name: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
      };
      version_group: {
        name: string;
      };
    }>;
  }>;
  order: number;
  stats: Array<{ base_stat: number; effort: number; stat: { name: string } }>;
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
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
}

export interface PokemonState {
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
  | GetDetailAction
  | SearchAction
  | SetAlert
  | SetLoading;
