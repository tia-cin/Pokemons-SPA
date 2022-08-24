import {
  Actions,
  LOADING,
  SET_ALERT,
  Pokemon,
  SEARCH,
  GET_DETAIL,
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
  pokeID: any
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
        type: GET_DETAIL,
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

      const filtered = response.results.filter((r: any) =>
        r.name.includes(input)
      );

      const call = filtered.map((r: any) => axios.get(r.url));

      const final = await axios.all(call);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: SEARCH,
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
