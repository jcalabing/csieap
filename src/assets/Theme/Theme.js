import { createMuiTheme } from "@material-ui/core/styles";
import { blue, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#14A346",
      contrastText: "#EFF9F0",
    },
    secondary: purple,
  },
  typography: {
    h4: {
      fontWeight: 700,
      padding: 10,
    },
  },
});

export default theme;
