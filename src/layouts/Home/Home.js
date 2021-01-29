import React from "react";
import Login from "../../views/Login";
import { ThemeProvider } from "@material-ui/core";
import Appbar from "../../components/Appbar";
import Theme from "../../assets/Theme";
import StickyFooter from "./../../components/StickyFooter";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Appbar />
      <Login />
      <StickyFooter />
    </ThemeProvider>
  );
}
