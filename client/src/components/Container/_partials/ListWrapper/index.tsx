// mui components
import { Grid, Typography, Link, Divider } from "@mui/material";
import { categoryType } from "redux/constants";

interface Props {
  name: categoryType;
  setCategory: (category: categoryType) => void;
}
const ListWrapper: React.FC<Props> = ({ name, setCategory, children }) => (
  <>
    <Grid container justifyContent="space-between" p="15px">
      <Grid item>
        <Typography
          component="h2"
          variant="h5"
          sx={{ textTransform: "capitalize" }}
        >
          Top {name}
        </Typography>
      </Grid>
      <Grid item sx={{ cursor: "pointer" }}>
        <Link onClick={() => setCategory(name)} color="inherit">
          <Typography component="h3" variant="button">
            SEE ALL
          </Typography>
        </Link>
      </Grid>
    </Grid>

    {children}
    <Divider />
  </>
);

export default ListWrapper;
