// mui components
import { Grid, Typography } from "@mui/material";

// components
import AlbumsLoading from "components/AlbumsLoading";
import AlbumItem from "components/AlbumItem";
import ArtistItem from "components/ArtistItem";
import { Box } from "@mui/system";

interface Props {
  artistes: any[];
  loading: boolean;
  isLoadingMore?: boolean;
}
const ArtistesList: React.FC<Props> = ({
  artistes,
  loading,
  isLoadingMore,
}) => {
  return (
    <Box>
      {loading ? (
        <AlbumsLoading skeletonCount={4} />
      ) : (
        <Grid container spacing={2}>
          {artistes?.map(({ artistName }, i) => (
            <ArtistItem key={i} artistName={artistName} />
          ))}
        </Grid>
      )}
      {isLoadingMore && <AlbumsLoading skeletonCount={4} />}
    </Box>
  );
};

export default ArtistesList;
