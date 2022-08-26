// action types
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_MOVES = "GET_MOVES";
export const GET_SPECIES = "GET_SPECIES";
export const GET_TYPES = "GET_TYPES";
export const GET_ITEMS = "GET_ITEMS";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
export const SET_ALERT = "SET_ALERT";

// data interfaces
export interface Alerts {
  message: string;
}

export interface Pokemon {
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  id: number;
  abilities: Array<{ ability: { name: string; url: string }; slot: number }>;
  held_items: Item[];
  location_area_encounters: string;
  moves: Move[];
  order: number;
  stats: Array<{ base_stat: number; effort: number; stat: string }>;
  sprites: {
    back_default: string;
    front_default: string;
    versions: {
      ["generation-v"]: {
        ["black-white"]: {
          animated: {
            back_default: string | undefined;
            front_default: string | undefined;
          };
        };
      };
    };
  };
}

export interface Move {
  accuracy: number;
  contest_combos: {
    normal: {
      use_after: Array<{ name: string; url: string }>;
      use_before: Array<{ name: string; url: string }>;
    };
    super: {
      use_after: Array<{ name: string; url: string }>;
      use_before: Array<{ name: string; url: string }>;
    };
  };
  contest_effect: { url: string };
  contest_type: { url: string };
  damage_class: { name: string; url: string };
  effect_chance: number;
  effect_changes: Array<{
    effect_entries: Array<{
      effect: string;
      short_effect?: string;
      language: { name: "en" };
    }>;
    version_group: { name: string; url: string };
  }>;
  effect_entries: Array<{
    effect: string;
    short_effect?: string;
    language: { name: "en" };
  }>;
  flavor_text_entries: Array<{
    flavor_text: string;
    version_group: { name: string; url: string };
    language: { name: "en" };
  }>;
  generation: { name: string; url: string };
  id: number;
  learned_by_pokemon: Pokemon[];
  machines: [];
  meta: {
    ailment: { name: string; url: string };
    ailment_chance: number;
    category: { name: string; url: string };
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    stat_chance: number;
  };
  name: string;
  power: number;
  pp: number;
  priority: number;
  target: { name: string; url: string };
  type: { name: string; url: string };
}

export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: Array<{ name: string; url: string }>;
  evolution_chain: { url: string };
  flavor_text_entries: Array<{}>;
  forms_switchable: boolean;
  gender_rate: number;
  generation: { name: string; url: string };
  growth_rate: { name: string; url: string };
  habitat: { name: string; url: string };
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  pal_park_encounter: Array<{
    area: { name: string; url: string };
    base_score: number;
    rate: number;
  }>;
  pokedex_numbers: Array<{
    entry_number: number;
    pokedex: { name: string; url: string };
  }>;
  shape: { name: string; url: string };
  varieties: Array<{ pokemon: Pokemon }>;
}

export interface Type {
  damageRelations: {
    doubleDamageFrom: Array<{ name: string; url: string }>;
    doubleDamageTo: Array<{ name: string; url: string }>;
    halfDamageFrom: Array<{ name: string; url: string }>;
    halfDamageTo: Array<{ name: string; url: string }>;
    noDamageFrom: Array<{ name: string; url: string }>;
    noDamageTo: Array<{ name: string; url: string }>;
  };
  game_indices: Array<{
    game_index: number;
    generation: { name: string; url: string };
  }>;
  generation: { name: string; url: string };
  move_damage_class: { name: string; url: string };
  moves: Move[];
  name: string;
  pokemon: Pokemon[];
}

export interface Item {
  attributes: Array<{ name: string; url: string }>;
  category: { name: string; url: string };
  cost: number;
  effect_entries: Array<{ name: string; url: string }>;
  flavor_text_entries: Array<{ name: string; url: string }>;
  fling_effect: number;
  fling_power: number;
  game_indices: Array<{ name: string; url: string }>;
  held_by_pokemon: Pokemon[];
  id: number;
  name: string;
  sprites: { default: string };
}

export interface PokemonState {
  moves: Move[];
  species: Species[];
  types: Type[];
  items: Item[];
  detail: Pokemon | null;
  loading: boolean;
  pokemons: Pokemon[];
  alerts: string;
}

// actions interfaces
interface GetPokemonsAction {
  type: typeof GET_POKEMONS;
  payload: Pokemon[];
}

interface GetMovesAction {
  type: typeof GET_MOVES;
  payload: Move[];
}

interface GetSpeciesAction {
  type: typeof GET_SPECIES;
  payload: Species[];
}

interface GetTypesAction {
  type: typeof GET_TYPES;
  payload: Type[];
}

interface GetItemsAction {
  type: typeof GET_ITEMS;
  payload: Item[];
}

interface GetDetailAction {
  type: typeof GET_DETAIL;
  payload: Pokemon;
}

interface SearchAction {
  type: typeof SEARCH;
  payload: Pokemon[];
}

interface SetAlert {
  type: typeof SET_ALERT;
  payload: string;
}

interface SetLoading {
  type: typeof LOADING;
}

export type Data = Pokemon | Move | Type | Species | Item;

export type Actions =
  | GetPokemonsAction
  | GetMovesAction
  | GetSpeciesAction
  | GetTypesAction
  | GetItemsAction
  | GetDetailAction
  | SearchAction
  | SetAlert
  | SetLoading;
