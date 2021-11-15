// mui components
import { Grid, Typography } from "@mui/material";

interface Props {
  artworkUrl100: string;
  collectionName: string;
  artistName: string;
}
const AlbumItem: React.FC<Props> = ({
  artworkUrl100,
  collectionName,
  artistName,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      key={artworkUrl100}
      sx={{
        cursor: "pointer",
        transition: "all 0.3s ease",
        ":hover": { transform: "scale(1.02)" },
      }}
    >
      <img
        src={artworkUrl100}
        alt={collectionName}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: 5,
          marginBottom: 10,
        }}
        title={collectionName}
      />
      <Typography mb="5px" noWrap>
        {collectionName}
      </Typography>
      <Typography variant="subtitle1" component="p" fontSize="14px">
        {artistName}
      </Typography>
    </Grid>
  );
};

export default AlbumItem;
