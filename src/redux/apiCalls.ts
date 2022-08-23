import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import {
  Actions,
  GET_ITEMS,
  GET_MOVES,
  GET_POKEMONS,
  GET_SPECIES,
  GET_TYPES,
  Item,
  Move,
  Pokemon,
  SET_ALERT,
  Species,
  Type,
} from "./types";
const axios = require("axios");
// urls
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://pokeapi.co/api/v2/move?limit=100000&offset=0
// https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0
// https://pokeapi.co/api/v2/type
// https://pokeapi.co/api/v2/item?limit=100000&offset=0

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

      const response: Pokemon[] = await res.data;

      dispatch({
        type: GET_POKEMONS,
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

export const getMoves = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Loading Moves",
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/move?limit=100000&offset=0"
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Move[] = await res.data;

      dispatch({
        type: GET_MOVES,
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

export const getSpecies = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Loading Species",
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Species[] = await res.data;

      dispatch({
        type: GET_SPECIES,
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

export const getTypes = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Fetching Pokemons",
      });

      const res = await axios.get("https://pokeapi.co/api/v2/type");

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Type[] = await res.data;

      dispatch({
        type: GET_TYPES,
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

export const getItems = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Fetching Pokemons",
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/item?limit=100000&offset=0"
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response: Item[] = await res.data;

      dispatch({
        type: GET_ITEMS,
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
