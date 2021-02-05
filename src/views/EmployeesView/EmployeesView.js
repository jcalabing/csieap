import React from "react";
import { makeStyles, Paper, Grid, Button } from "@material-ui/core";
import EmployeeData from "./EmployeeData/EmployeeData";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "../../components/DialogBox";
import FormPDS from "../../components/FormPDS";

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
          <MuiThemeProvider theme={Extheme}>
            <DialogBox
              title="Add New Employee"
              triggerDialog={(trigger) => {
                return (
                  <Button color="primary" variant="contained" onClick={trigger}>
                    Add New
                  </Button>
                );
              }}
            >
              <FormPDS></FormPDS>
            </DialogBox>
          </MuiThemeProvider>
        </Grid>
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.marginalized}>
        <EmployeeData className={classes.container} />
      </Grid>
    </Grid>
  );
}
