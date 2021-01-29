import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#14A346",
      contrastText: "#EFF9F0",
    },
    secondary: {
      main: "#FFA400",
      contrastText: "#EFF9F0",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      padding: 10,
    },
  },
});

export default theme;
