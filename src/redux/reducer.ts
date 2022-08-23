import { PokemonState, Actions, GET_POKEMONS } from "./types";

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
    default:
      return state;
  }
};
