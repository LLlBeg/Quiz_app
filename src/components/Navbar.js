import { Button } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../context/Theme";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Button color="secondary" onClick={switchTheme}>
        Switch theme
      </Button>
    </ThemeProvider>
  );
};

export default NavBar;
