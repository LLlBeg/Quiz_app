import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#9198e5",
  textColor: "#red",
  headingColor: "red",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${(props) => props.theme.headingColor};
 }`;
