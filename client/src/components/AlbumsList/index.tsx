// mui components
import { Grid, Typography } from "@mui/material";

// components
import AlbumsLoading from "components/AlbumsLoading";
import AlbumItem from "components/AlbumItem";

interface Props {
  albums: any[];
  loading: boolean;
  isLoadingMore?: boolean;
}
const AlbumsList: React.FC<Props> = ({ albums, loading, isLoadingMore }) => {
  return (
    <>
      {loading ? (
        <AlbumsLoading skeletonCount={4} />
      ) : (
        <Grid container spacing={10}>
          {albums?.map(({ collectionName, artworkUrl100, artistName }, i) => (
            <AlbumItem
              key={i}
              collectionName={collectionName}
              artworkUrl100={artworkUrl100}
              artistName={artistName}
            />
          ))}
        </Grid>
      )}
      {isLoadingMore && <AlbumsLoading skeletonCount={4} />}
    </>
  );
};

export default AlbumsList;
