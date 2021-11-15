import axios from "axios";
import { Params } from "redux/constants";
import debounce from "utils/debounce";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const search = async (params: Params): Promise<any> => {
  params.media = "music";

  return api.get("/", { params });
};

const searchSongs = async (params: Params): Promise<any> =>
  search({ entity: "song", limit: 5, ...params });

const searchArtistes = async (params: Params): Promise<any> =>
  search({ entity: "musicArtist", limit: 4, ...params });

const searchAlbums = async (params: Params): Promise<any> =>
  search({ entity: "album", limit: 4, ...params });

export default { api, search, searchSongs, searchArtistes, searchAlbums };
