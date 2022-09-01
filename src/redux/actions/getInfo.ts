import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Actions, GET_POKEMONS, Pokemon, SET_ALERT } from "../types";

const axios = require("axios");

export const getPokemons = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Fetching Pokemons",
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Pokemon = await res.data.results.map((r: any) =>
        axios.get(r.url)
      );

      const final = await axios.all(response);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: GET_POKEMONS,
        payload: all,
      });

      dispatch({
        type: SET_ALERT,
        payload: "Success!",
      });
    } catch (error: any) {
      dispatch({
        type: SET_ALERT,
        payload: "Ups, Something Failed",
      });
    }
  };
};
