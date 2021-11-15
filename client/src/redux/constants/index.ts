export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export const GET_RESULTS = "GET_RESULTS";

export const FETCHING_RESULTS = "FETCHING_RESULTS";

export const GET_RESULTS_ERROR = "GET_RESULTS_ERROR";

// All search results
export const GET_ALL_SONGS = "GET_ALL_SONGS";

export const FETCHING_ALL_SONGS = "FETCHING_ALL_SONGS";

export const GET_ALL_SONGS_ERROR = "GET_ALL_SONGS_ERROR";

export const GET_ALL_ARTISTES = "GET_ALL_ARTISTES";

export const FETCHING_ALL_ARTISTES = "FETCHING_ALL_ARTISTES";

export const GET_ALL_ARTISTES_ERROR = "GET_ALL_ARTISTES_ERROR";

export const GET_ALL_ALBUMS = "GET_ALL_ALBUMS";

export const FETCHING_ALL_ALBUMS = "FETCHING_ALL_ALBUMS";

export const GET_ALL_ALBUMS_ERROR = "GET_ALL_ALBUMS_ERROR";

// Top search results
export const GET_SONGS = "GET_SONGS";

export const FETCHING_SONGS = "FETCHING_SONGS";

export const GET_SONGS_ERROR = "GET_SONGS_ERROR";

export const GET_ARTISTES = "GET_ARTISTES";

export const FETCHING_ARTISTES = "FETCHING_ARTISTES";

export const GET_ARTISTES_ERROR = "GET_ARTISTES_ERROR";

export const GET_ALBUMS = "GET_ALBUMS";

export const FETCHING_ALBUMS = "FETCHING_ALBUMS";

export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR";

export const RESET_STATE = "RESET_STATE";

export interface Params {
  term: string;
  limit?: number;
  media?: string;
  entity?: string;
  offset?: number;
}

export type categoryType = "songs" | "artistes" | "albums";
