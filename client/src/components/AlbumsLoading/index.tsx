import React from "react";

// mui components
import { Grid, Skeleton } from "@mui/material";

const AlbumsLoading: React.FC<{ skeletonCount: number }> = ({
  skeletonCount,
}) => {
  const arrayOfInts = Array.from(Array(skeletonCount).keys());
  return (
    <Grid container>
      {arrayOfInts.map((item) => (
        <Grid item xs={12} md={6} lg={3} p="15px" key={item}>
          <Skeleton variant="rectangular" height="200px" />
          <Skeleton height="40px" />
          <Skeleton width="60%" height="40px" />
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumsLoading;
