import {
  PokemonState,
  Actions,
  GET_POKEMONS,
  GET_MOVES,
  GET_SPECIES,
  GET_TYPES,
  GET_ITEMS,
  SET_ALERT,
  LOADING,
  SEARCH,
  GET_DETAIL,
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
        loading: false,
      };
    case GET_MOVES:
      return {
        ...state,
        moves: action.payload,
        loading: false,
      };
    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
        loading: false,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
        loading: false,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alerts: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    default:
      return state;
  }
};
