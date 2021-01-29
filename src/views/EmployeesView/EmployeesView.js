import React from "react";
import { makeStyles, Typography, Paper, Grid } from "@material-ui/core";
import EmployeeTable from "./EmployeeTable/EmployeeTable";
import Etable from "./Etable/Etable";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function EmployeesView() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Employees
        </Typography>
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.container}>
        {/* <EmployeeTable /> */}
        <Etable />
      </Grid>
    </Grid>
  );
}
