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
  order: number;
  held_items: Array<{
    item: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: { name: string };
    slot: number;
  }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string };
  }>;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
      ["official-artwork"]: {
        front_default: string;
      };
    };
    versions: {
      ["generation-i"]: {
        ["red-blue"]: {
          front_default: string;
        };
        yellow: {
          front_default: string;
        };
      };
      ["generation-ii"]: {
        crystal: {
          front_default: string;
        };
        gold: {
          front_default: string;
        };
        silver: {
          front_default: string;
        };
      };
      ["generation-iii"]: {
        emerald: {
          front_default: string;
        };
        ["firered-leafgreen"]: {
          front_default: string;
        };
        ["ruby-sapphire"]: {
          front_default: string;
        };
      };
      ["generation-iv"]: {
        ["diamond-pearl"]: {
          front_default: string;
        };
        ["heartgold-soulsilver"]: {
          front_default: string;
        };
        platinum: {
          front_default: string;
        };
      };
      ["generation-v"]: {
        ["black-white"]: {
          animated: {
            front_default: string;
          };
          front_default: string;
        };
      };
      ["generation-vi"]: {
        ["omegaruby-alphasapphire"]: {
          front_default: string;
        };
        ["x-y"]: {
          front_default: string;
        };
      };
      ["generation-vii"]: {
        icons: {
          front_default: string;
        };
        ["ultra-sun-ultra-moon"]: {
          front_default: string;
        };
      };
      ["generation-viii"]: {
        icons: {
          front_default: string;
        };
      };
    };
  };
  species: {
    name: string;
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
