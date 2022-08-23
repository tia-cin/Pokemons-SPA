import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import { Actions, GET_POKEMONS, SET_ALERT } from "./types";
const axios = require("axios");
// urls
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://pokeapi.co/api/v2/move?limit=100000&offset=0
// https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0
// https://pokeapi.co/api/v2/type
// https://pokeapi.co/api/v2/item?limit=100000&offset=0

export const getPokemons = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: "Fetching Pokemons",
    });

    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );

    console.log(res);
  };
};
