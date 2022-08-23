import {
  PokemonState,
  Actions,
  GET_POKEMONS,
  GET_MOVES,
  GET_SPECIES,
  GET_TYPES,
  GET_ITEMS,
} from "./types";

const initialState: PokemonState = {
  moves: [],
  species: [],
  types: [],
  items: [],
  detail: null,
  loading: false,
  pokemons: [],
  alerts: "",
};

export const reducer = (
  state = initialState,
  action: Actions
): PokemonState => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_MOVES:
      return {
        ...state,
        moves: action.payload,
      };
    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
