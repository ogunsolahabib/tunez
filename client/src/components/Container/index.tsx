import { useState, useEffect } from "react";

import {
  Container,
  Divider,
  Typography,
  Box,
  useTheme,
  IconButton,
  AppBar,
  Grid,
  Stack,
} from "@mui/material";

import { AppState } from "redux/reducers";
import { connect } from "react-redux";
import SearchBar from "components/SearchBar";
import AlbumsList from "components/AlbumsList";
import SongsList from "components/SongsList";
import ArtistesList from "components/ArtistesList";
import Category from "components/Category";
import { categoryType } from "redux/constants";
import { resetState } from "redux/actions";

import { useDispatch } from "react-redux";
import ListWrapper from "./_partials/ListWrapper";
import ThemeToggle from "components/ThemeToggle";
import SearchIcon from "svg/SearchIcon";

interface Props {
  state: AppState;
}

const ResultWrapper: React.FC<Props> = ({ state }) => {
  const {
    isFetchingResults,
    topSongs,
    topAlbums,
    topArtistes,
    isFetchingTopSongs,
    isFetchingTopAlbums,
    isFetchingTopArtistes,
    searchQuery: { term: searchTerm },
  } = state;

  const dispatch = useDispatch();

  const [category, setCategory] = useState<categoryType | undefined>();

  const isLoadingAny =
    isFetchingResults ||
    isFetchingTopSongs ||
    isFetchingTopAlbums ||
    isFetchingTopArtistes;

  const allEmpty =
    !isLoadingAny &&
    !topSongs.length &&
    !topAlbums.length &&
    !topArtistes.length;

  // go back to home/search page once user starts typing again
  useEffect(() => {
    setCategory(undefined);
  }, [searchTerm]);

  useEffect(() => {
    (allEmpty || !category) && window.scrollTo(0, 0);
  }, [allEmpty, category]);

  // check pending API responses and reset state when search is empty
  useEffect(() => {
    !isLoadingAny && !searchTerm && dispatch(resetState());
  }, [isLoadingAny, searchTerm]);

  const TopResults: React.FC = () => (
    <Box sx={{ " >*": { margin: 5 } }}>
      <ListWrapper name="songs" setCategory={setCategory}>
        <SongsList songs={topSongs} loading={isFetchingTopSongs} />
      </ListWrapper>

      <ListWrapper name="albums" setCategory={setCategory}>
        <AlbumsList albums={topAlbums} loading={isFetchingTopAlbums} />
      </ListWrapper>
      <ListWrapper name="artistes" setCategory={setCategory}>
        <ArtistesList artistes={topArtistes} loading={isFetchingTopArtistes} />
      </ListWrapper>
    </Box>
  );

  return (
    <Container>
      {/* App's top bar */}
      <AppBar position="fixed" color="inherit">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "20px 15px",
          }}
        >
          <Typography mb={0} variant="h5" mr={1}>
            Find Tunez
          </Typography>
          <Stack
            spacing={1}
            sx={{ width: "fit-content" }}
            direction="row"
            alignItems="center"
          >
            {category && (
              <>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {category} results matching "{searchTerm}"
                </Typography>{" "}
                <IconButton onClick={(_) => setCategory(undefined)}>
                  <SearchIcon />
                </IconButton>
              </>
            )}
          </Stack>
          <ThemeToggle />
        </Container>
      </AppBar>

      <Box
        sx={{
          minHeight: "60vh",
          m: "90px auto",
          position: "relative",
          padding: 2,
        }}
      >
        {/* search bar wrapper */}
        <Box
          sx={{
            transition: "all 0.5s ease",
            marginTop: !searchTerm || allEmpty ? "20vh" : "20px",
            backgroundColor: "background.default",
          }}
        >
          {!category && <SearchBar />}
        </Box>

        {/* Empty state message or search results */}
        <Box sx={{ mt: "30px" }}>
          {!searchTerm ? (
            <Typography variant="h4" m="15px 0" textAlign="center" color="">
              Search for a song, album or artist
            </Typography>
          ) : searchTerm && allEmpty ? (
            <Typography variant="h4" m="15px 0" textAlign="center">
              No results found for "{searchTerm}"
            </Typography>
          ) : category ? (
            <Category name={category} />
          ) : (
            <TopResults />
          )}
        </Box>
      </Box>
    </Container>
  );
};

const mpaStateToProps = (state: AppState) => ({
  state,
});

export default connect(mpaStateToProps)(ResultWrapper);
