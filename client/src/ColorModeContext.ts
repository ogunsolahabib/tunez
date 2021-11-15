import { useContext, createContext } from "react";
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorModeContext = () => useContext(ColorModeContext);

export default ColorModeContext;
