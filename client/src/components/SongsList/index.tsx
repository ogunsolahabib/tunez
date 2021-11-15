import React from "react";

// mui components
import { List } from "@mui/material";

// Components
import SongsLoading from "components/SongsLoading";
import SongItem from "components/SongItem";

interface Props {
  songs: any[];
  loading: boolean;
  isLoadingMore?: boolean;
}

const SongsList: React.FC<Props> = ({ songs, loading, isLoadingMore }) => {
  return (
    <>
      {loading ? (
        <SongsLoading skeletonCount={6} />
      ) : (
        <List sx={{ width: "100%" }} id="songs__list">
          {songs?.map(({ trackName, artworkUrl60, artistName }, i) => (
            <SongItem key={i} {...{ trackName, artworkUrl60, artistName }} />
          ))}
        </List>
      )}
      {isLoadingMore && <SongsLoading skeletonCount={1} />}
    </>
  );
};

export default SongsList;
