import React from "react";
import { makeStyles, Paper, Grid, Button } from "@material-ui/core";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "../../components/DialogBox";
import FormPDS from "../../components/FormPDS";
import EmployeeApi from "./../../API/EmployeeApi";
import GetEmployeeData from "./GetEmployeeData";
import PDSBox from "./../../components/PDSBox/PDSBox";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  marginalized: {
    marginTop: 15,
    marginBottom: 15,
  },
}));

export default function EmployeesView() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <PDSBox title="Add New Employee" buttonName="ADD NEW" jsonData={{}} />
        </Grid>
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.marginalized}>
        <GetEmployeeData />
      </Grid>
    </Grid>
  );
}
