import React from "react";

// mui components
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Skeleton,
} from "@mui/material";

const SongsLoading: React.FC<{ skeletonCount: number }> = ({
  skeletonCount,
}) => {
  const arrayOfInts = Array.from(Array(skeletonCount).keys());
  return (
    <List sx={{ width: "100%" }}>
      {arrayOfInts?.map((i) => (
        <ListItem sx={{ cursor: "pointer", mb: "10px" }} key={i}>
          <ListItemAvatar>
            <Skeleton variant="rectangular" height="50px" width="50px" />
          </ListItemAvatar>
          <ListItemText
            primary={<Skeleton variant="text" width="500px" />}
            secondary={<Skeleton variant="text" width="150px" />}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SongsLoading;
