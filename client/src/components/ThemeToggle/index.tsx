import { IconButton, useTheme } from "@mui/material";

// utils
import { useColorModeContext } from "ColorModeContext";

// svgs
import SunSVG from "svg/sun.svg";
import MoonSVG from "svg/moon.svg";

const ThemeToggle: React.FC = () => {
  const theme = useTheme();

  const colorMode = useColorModeContext();

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      <img
        src={theme.palette.mode === "dark" ? SunSVG : MoonSVG}
        style={{ display: "block", width: "25px", height: "25px" }}
      />
    </IconButton>
  );
};
export default ThemeToggle;
