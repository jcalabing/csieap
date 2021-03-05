import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

import Background from "../../assets/img/loginbg.jpg";
import logo from "../../assets/img/pcalogo.png";
import Password from "../../components/atom/Password";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(4),
  },
  root: {
    padding: theme.spacing(3),
    backgroundImage: "url(" + Background + ")",
    minHeight: "80vh",
    backgroundSize: "cover",
    flexGrow: 1,
  },
  avatar: {
    margin: "auto",
    display: "block",
  },
  signin: {
    textAlign: "center",
  },
  submit: {
    float: "right",
  },
  siginText: {
    fontWeight: "600",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} lg={7}></Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.container}>
        <Paper className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} justify="center">
              <img src={logo} alt="logo" center className={classes.avatar} />
            </Grid>
            <Grid item xs={12} className={classes.signin}>
              <Typography
                variant="h5"
                className={classes.siginText}
                color="primary"
              >
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Password />
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={7}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item xs={5}>
                  <Button
                    color="primary"
                    className={classes.submit}
                    variant="contained"
                    href="/admin"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <hr />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Forgot Password ?</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
