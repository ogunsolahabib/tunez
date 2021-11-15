import { useState, useEffect, useRef, useCallback } from "react";

//mui components
import {} from "@mui/material";

// components
import SongsList from "components/SongsList";
import AlbumsList from "components/AlbumsList";

// redux
import { connect } from "react-redux";
import { AppState } from "redux/reducers";
import {
  searchAllSongs,
  searchAllAlbums,
  searchAllArtistes,
} from "redux/actions";
import { categoryType, Params } from "redux/constants";
import useSearch from "utils/useInfiniteScroll";

interface Props {
  name: categoryType;
  state: AppState;
  searchAllSongs: (query: Params) => Promise<any>;
  searchAllAlbums: (query: Params) => Promise<any>;
  searchAllArtistes: (query: Params) => Promise<any>;
}

const Category: React.FC<Props> = ({
  name,
  state: {
    allSongs,
    isFetchingAllSongs,
    allAlbums,
    isFetchingAllAlbums,
    allArtistes,
    isFetchingAllArtistes,
    searchQuery,
  },
  searchAllSongs,
  searchAllAlbums,
  searchAllArtistes,
}) => {
  const [offset, setOffset] = useState(1);

  const fetchList = async (): Promise<any> => {
    switch (name) {
      case "songs":
        return searchAllSongs({ ...searchQuery, offset }).then(() =>
          setOffset(offset + 1)
        );

      case "albums":
        return searchAllAlbums({ ...searchQuery, offset }).then(() =>
          setOffset(offset + 1)
        );

      case "artistes":
        return searchAllArtistes({ ...searchQuery, offset }).then(() =>
          setOffset(offset + 1)
        );
    }
  };

  const refetchList = () => {
    if (offset === 1) return;
    fetchList().then(() => setOffset(offset + 1));
  };

  const isLoadingAny =
    isFetchingAllSongs || isFetchingAllAlbums || isFetchingAllArtistes;

  const [isFetching, setIsFetching] = useSearch(refetchList);

  useEffect(() => {
    fetchList();
    return () => {
      setOffset(1);
    };
  }, []);

  useEffect(() => {
    setIsFetching(isLoadingAny);
  }, [isLoadingAny]);

  switch (name) {
    case "songs":
      return (
        <SongsList
          songs={allSongs}
          loading={!allSongs.length && isFetchingAllSongs}
          isLoadingMore={isFetching}
        />
      );
    case "albums":
      return (
        <AlbumsList
          albums={allAlbums}
          loading={!allAlbums.length && isFetchingAllAlbums}
          isLoadingMore={isFetching}
        />
      );
    case "artistes":
      return (
        <AlbumsList
          albums={allArtistes}
          loading={!allArtistes.length && isFetchingAllArtistes}
          isLoadingMore={isFetching}
        />
      );
    default:
      return <></>;
  }
};

const mapStateToProps = (state: AppState) => ({ state });
export default connect(mapStateToProps, {
  searchAllSongs,
  searchAllAlbums,
  searchAllArtistes,
})(Category);
