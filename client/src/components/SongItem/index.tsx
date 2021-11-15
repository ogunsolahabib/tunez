// mui components
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const SongItem: React.FC<{
  artworkUrl60: string;
  trackName: string;
  artistName: string;
}> = ({ artworkUrl60, trackName, artistName }) => {
  return (
    <ListItem
      sx={{
        cursor: "pointer",
        mb: "10px",
        ":hover": {
          borderBottom: "1px solid",
          transition: "all 0.3s",
          transform: "scale(0.99)",
        },
        boxSizing: "content-box",
      }}
    >
      <ListItemAvatar>
        <Avatar variant="rounded">
          <img src={artworkUrl60} alt={trackName} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={trackName} secondary={artistName} />
    </ListItem>
  );
};

export default SongItem;
