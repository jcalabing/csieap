import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Container } from "@material-ui/core";
import logo from "../../assets/img/pcalogo.png";

const styles = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    fontWeight: 500,
    color: "#fff",
    "&:hover, &:focus": {
      color: "#FFCD70",
    },
  },
  logolink: {
    textDecoration: "none",
    fontSize: 25,
    fontWeight: 500,
    marginLeft: 10,
    color: "#fff",
    "&:hover, &:focus": {
      color: "#FFCD70",
    },
  },
  logoimg: {
    height: 40,
    marginTop: 5,
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
});

const useStyles = makeStyles(styles);

export default function Appbar() {
  const classes = useStyles();
  var brand = (
    <div className={classes.brand}>
      <img src={logo} alt="logo" className={classes.logoimg} />
      <span className={classes.logolink}>PCA Region 6</span>
    </div>
  );
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <div className={classes.title}>{brand}</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
