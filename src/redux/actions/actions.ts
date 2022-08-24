import {
  Actions,
  LOADING,
  GET_POKEMONS,
  SET_ALERT,
  Pokemon,
  SEARCH,
} from "../types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

const axios = require("axios");

export const loadingAction = (): Actions => {
  return {
    type: LOADING,
  };
};

export const getDetailAction = (
  pokeID: number
): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Searching Pokemon",
      });

      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Pokemon = await res.data;

      dispatch({
        type: SEARCH,
        payload: response,
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

export const searchPokemons = (
  input: string
): ThunkAction<void, RootState, null, Actions> => {
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

      const response = await res.data;

      const final = response.results.filter((r: any) => r.name.includes(input));

      dispatch({
        type: SEARCH,
        payload: final,
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
