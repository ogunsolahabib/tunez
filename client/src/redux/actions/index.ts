import api from "api";
import { Dispatch } from "redux";
import {
  FETCHING_RESULTS,
  FETCHING_SONGS,
  FETCHING_ALBUMS,
  FETCHING_ARTISTES,
  GET_RESULTS,
  GET_RESULTS_ERROR,
  SET_SEARCH_QUERY,
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

export const search =
  (params: any) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({
      type: FETCHING_RESULTS,
      payload: true,
    });

    return api
      .search(params)
      .then((res) => {
        dispatch({
          type: GET_RESULTS,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_RESULTS_ERROR, payload: err });
      });
  };

export const searchSongs =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_SONGS, payload: true });
    return api
      .searchSongs(query)
      .then((res) => {
        dispatch({
          type: GET_SONGS,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_SONGS_ERROR, payload: err });
      });
  };
export const searchAlbums =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_ALBUMS, payload: true });
    return api
      .searchAlbums(query)
      .then((res) => {
        dispatch({
          type: GET_ALBUMS,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ALBUMS_ERROR, payload: err });
      });
  };
export const searchArtistes =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_ARTISTES, payload: true });
    return api
      .searchArtistes(query)
      .then((res) => {
        dispatch({
          type: GET_ARTISTES,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ARTISTES_ERROR, payload: err });
      });
  };

export const searchAllSongs =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_ALL_SONGS, payload: true });
    return api
      .search({ limit: 10, entity: "song", ...query })
      .then((res) => {
        dispatch({
          type: GET_ALL_SONGS,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_SONGS_ERROR, payload: err });
      });
  };

export const searchAllAlbums =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_ALL_ALBUMS, payload: true });
    return api
      .search({ limit: 10, entity: "song", ...query })
      .then((res) => {
        dispatch({
          type: GET_ALL_ALBUMS,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_ALBUMS_ERROR, payload: err });
      });
  };
export const searchAllArtistes =
  (query: Params) =>
  (dispatch: Dispatch): Promise<any> => {
    dispatch({ type: FETCHING_ALL_ARTISTES, payload: true });
    return api
      .search({ limit: 10, entity: "musicArtist", ...query })
      .then((res) => {
        dispatch({
          type: GET_ALL_ARTISTES,
          payload: res.data?.data?.results || [],
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_ARTISTES_ERROR, payload: err });
      });
  };

export const setSearchQuery = (query: Params) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: query,
  });
};

export const resetState = () => (dispatch: Dispatch) => {
  dispatch({ type: RESET_STATE });
};
