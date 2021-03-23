import React from "react";
import { makeStyles, Paper, Grid, Button, Typography } from "@material-ui/core";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "../../components/DialogBox";
import FormUser from "../../components/FormUser";
import UserData from "./UserData";
import GetUserData from "./GetUserData/";
import UserApi from "./../../API/UserApi";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  marginalized: {
    marginTop: 15,
    marginBottom: 15,
  },
}));

export default function UserView() {
  const classes = useStyles();
  const [jsonData, setValue] = React.useState({});

  const saveData = (Key, Value) => {
    var newValue = jsonData;
    newValue[Key] = Value;
    setValue(newValue);
  };
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <MuiThemeProvider theme={Extheme}>
            <DialogBox
              title="Add New User"
              triggerDialog={(trigger) => {
                return (
                  <Button color="primary" variant="contained" onClick={trigger}>
                    Add New
                  </Button>
                );
              }}
              submitData={() => UserApi.addNewUser(jsonData)}
              // submitData={() => console.log(jsonData)}
            >
              <FormUser saveData={saveData} jsonData={jsonData}></FormUser>
            </DialogBox>
          </MuiThemeProvider>
        </Grid>
      </Grid>
      <Grid item xs={12} component={Paper} className={classes.marginalized}>
        <GetUserData />
      </Grid>
    </Grid>
  );
}
