import React from "react";
import Container from "components/Container";
import { Provider } from "react-redux";
import configureStore from "redux/configureStore";
import { defaultState } from "redux/reducers";
import { Box, CssBaseline } from "@mui/material";

import styled from "styled-components";

import "./App.css";

// mui components
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import ColorModeContext from "ColorModeContext";

function App() {
  const store = configureStore(defaultState);

  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: grey,
            divider: grey[200],
            text: {
              primary: "#000000",
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[400],
            background: {
              default: "#000",
              paper: "#a9a9a9",
            },
            text: {
              primary: grey[50],
              secondary: grey[300],
            },
          }),
    },
  });
  const getPalette = (mode: PaletteMode) => ({ palette: { mode } });
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getPalette(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <h1>Testing testing</h1>
          <Box
            data-testid="app"
            sx={{ backgroundColor: "background.default", minHeight: "100vh" }}
          >
            <Container />
          </Box>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
