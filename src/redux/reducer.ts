import {
  PokemonState,
  Actions,
  GET_POKEMONS,
  SET_ALERT,
  LOADING,
  SEARCH,
  GET_DETAIL,
} from "./types";

const initialState: PokemonState = {
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
