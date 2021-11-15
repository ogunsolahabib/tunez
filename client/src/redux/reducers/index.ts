import { Action } from "redux";
import {
  FETCHING_RESULTS,
  GET_RESULTS,
  GET_RESULTS_ERROR,
  SET_SEARCH_QUERY,
  FETCHING_SONGS,
  FETCHING_ALBUMS,
  FETCHING_ARTISTES,
  GET_SONGS,
  GET_SONGS_ERROR,
  GET_ALBUMS,
  GET_ALBUMS_ERROR,
  GET_ARTISTES,
  GET_ARTISTES_ERROR,
  GET_ALL_SONGS,
  FETCHING_ALL_SONGS,
  GET_ALL_SONGS_ERROR,
  GET_ALL_ALBUMS,
  FETCHING_ALL_ALBUMS,
  GET_ALL_ALBUMS_ERROR,
  GET_ALL_ARTISTES,
  FETCHING_ALL_ARTISTES,
  GET_ALL_ARTISTES_ERROR,
  Params,
  RESET_STATE,
} from "redux/constants";

export interface AppState {
  results: any[];
  topSongs: any[];
  allSongs: any[];
  isFetchingTopSongs: boolean;
  isFetchingAllSongs: boolean;
  topAlbums: any[];
  allAlbums: any[];
  isFetchingTopAlbums: boolean;
  isFetchingAllAlbums: boolean;
  topArtistes: any[];
  allArtistes: any[];
  isFetchingTopArtistes: boolean;
  isFetchingAllArtistes: boolean;
  searchQuery: Params;
  isFetchingResults: boolean;
  getResultsError: string;
}

export const defaultState: AppState = {
  results: [],
  topSongs: [],
  allSongs: [],
  isFetchingTopSongs: false,
  isFetchingAllSongs: false,
  topAlbums: [],
  allAlbums: [],
  isFetchingTopAlbums: false,
  isFetchingAllAlbums: false,
  topArtistes: [],
  allArtistes: [],
  isFetchingTopArtistes: false,
  isFetchingAllArtistes: false,
  isFetchingResults: false,
  getResultsError: "",
  searchQuery: {
    term: "",
    offset: 1,
  },
};

export default (state = defaultState, action: Action & { payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RESULTS:
      return {
        ...state,
        results: payload,
        isFetchingResults: false,
        getResultsError: "",
      };
    case FETCHING_RESULTS:
      return {
        ...state,
        isFetchingResults: payload,
      };
    case GET_RESULTS_ERROR:
      return {
        ...state,
        getResultsError: payload,
      };
    case GET_SONGS:
      return {
        ...state,
        topSongs: payload,
        isFetchingTopSongs: false,
        getTopSongsError: "",
      };
    case FETCHING_SONGS:
      return {
        ...state,
        isFetchingTopSongs: payload,
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        getTopSongsError: payload,
      };
    case GET_ALBUMS:
      return {
        ...state,
        topAlbums: payload,
        isFetchingTopAlbums: false,
        getTopAlbumsError: "",
      };
    case FETCHING_ALBUMS:
      return {
        ...state,
        isFetchingTopAlbums: payload,
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        getTopAlbumsError: payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    case GET_ARTISTES:
      return {
        ...state,
        topArtistes: payload,
        isFetchingTopArtistes: false,
        getTopArtistesError: "",
      };
    case FETCHING_ARTISTES:
      return {
        ...state,
        isFetchingTopArtistes: payload,
      };
    case GET_ARTISTES_ERROR:
      return {
        ...state,
        getTopArtistesError: payload,
      };
    case GET_ALL_SONGS:
      return {
        ...state,
        allSongs: [...state.allSongs, ...payload],
        isFetchingAllSongs: false,
        getAllSongsError: "",
      };
    case FETCHING_ALL_SONGS:
      return {
        ...state,
        isFetchingAllSongs: payload,
      };
    case GET_ALL_SONGS_ERROR:
      return {
        ...state,
        getAllSongsError: payload,
      };
    case GET_ALL_ALBUMS:
      return {
        ...state,
        allAlbums: [...state.allAlbums, ...payload],
        isFetchingAllAlbums: false,
        getAllAlbumsError: "",
      };
    case FETCHING_ALL_ALBUMS:
      return {
        ...state,
        isFetchingAllAlbums: payload,
      };
    case GET_ALL_ALBUMS_ERROR:
      return {
        ...state,
        getAllAlbumsError: payload,
      };
    case GET_ALL_ARTISTES:
      return {
        ...state,
        allArtistes: [...state.allArtistes, ...payload],
        isFetchingAllArtistes: false,
        getAllArtistesError: "",
      };
    case FETCHING_ALL_ARTISTES:
      return {
        ...state,
        isFetchingAllArtistes: payload,
      };
    case GET_ALL_ARTISTES_ERROR:
      return {
        ...state,
        getAllArtistesError: payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    case RESET_STATE:
      return defaultState;
    default:
      return state;
  }
};
