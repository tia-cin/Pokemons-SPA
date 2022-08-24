import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  Actions,
  GET_ITEMS,
  GET_MOVES,
  GET_POKEMONS,
  GET_SPECIES,
  GET_TYPES,
  SET_ALERT,
} from "../types";

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

      const response = await res.data.results.map((r: any) => axios.get(r.url));

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

      const response = await res.data.results.map((r: any) => axios.get(r.url));

      const final = await axios.all(response);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: GET_MOVES,
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

      const response = await res.data.results.map((r: any) => axios.get(r.url));

      const final = await axios.all(response);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: GET_SPECIES,
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

export const getTypes = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Loading Types",
      });

      const res = await axios.get("https://pokeapi.co/api/v2/type");

      if (res.status !== 200) {
        throw new Error();
      }

      const response = await res.data.results.map((r: any) => axios.get(r.url));

      const final = await axios.all(response);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: GET_TYPES,
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

export const getItems = (): ThunkAction<void, RootState, null, Actions> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_ALERT,
        payload: "Loading Items",
      });

      const res = await axios.get(
        "https://pokeapi.co/api/v2/item?limit=100000&offset=0"
      );

      if (res.status !== 200) {
        throw new Error();
      }

      const response = await res.data.results.map((r: any) => axios.get(r.url));

      const final = await axios.all(response);

      const all = final.map((f: any) => f.data);

      dispatch({
        type: GET_ITEMS,
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

// urls
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://pokeapi.co/api/v2/move?limit=100000&offset=0
// https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0
// https://pokeapi.co/api/v2/type
// https://pokeapi.co/api/v2/item?limit=100000&offset=0
