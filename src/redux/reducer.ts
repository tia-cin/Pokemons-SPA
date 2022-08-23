import { PokemonState, Actions } from "./types";

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
    default:
      return state;
  }
};
