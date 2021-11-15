import { TextField, Box } from "@mui/material";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  setSearchQuery,
  searchSongs,
  searchAlbums,
  searchArtistes,
} from "redux/actions";
import { Params } from "redux/constants";
import { AppState } from "redux/reducers";

interface Props {
  setSearchQuery: (query: Params) => void;
  searchSongs: (query: Params) => Promise<any>;
  searchArtistes: (query: Params) => Promise<any>;
  searchAlbums: (query: Params) => Promise<any>;
}

const SearchBar: React.FC<Props> = ({
  setSearchQuery,
  searchSongs,
  searchAlbums,
  searchArtistes,
}) => {
  const { searchQuery } = useSearchInputState();

  const handleInputChange = (e: React.FormEvent<any>) => {
    const { value } = e.target as HTMLInputElement;
    setSearchQuery({ ...searchQuery, term: value });
  };

  useEffect(() => {
    if (!!searchQuery.term) {
      searchSongs(searchQuery);
      searchAlbums(searchQuery);
      searchArtistes(searchQuery);
    }
  }, [searchQuery.term, searchQuery.offset]);

  return (
    <Box sx={{ maxWidth: "600px", display: "block", margin: "auto" }}>
      <TextField
        id="song-search"
        label="Search for any song, artist or album"
        type="search"
        onChange={handleInputChange}
        value={searchQuery.term}
        fullWidth
      />
    </Box>
  );
};

const useSearchInputState = () =>
  useSelector((state: AppState) => ({ searchQuery: state.searchQuery }));

export default connect(null, {
  setSearchQuery,
  searchSongs,
  searchAlbums,
  searchArtistes,
})(SearchBar);
