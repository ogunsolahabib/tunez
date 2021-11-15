// mui components
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";

const ArtistItem: React.FC<{
  artistName: string;
}> = ({ artistName }) => {
  return (
    <Grid
      item
      sx={{
        cursor: "pointer",
        mb: "10px",
        ":hover": { borderBottom: "1px solid" },
      }}
      xs={6}
      md={3}
      p={2}
    >
      <Typography variant="h5">{artistName}</Typography>

      <Typography>Artiste</Typography>
    </Grid>
  );
};

export default ArtistItem;
