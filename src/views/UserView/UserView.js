import React from "react";
import { makeStyles, Paper, Grid, Button, Typography } from "@material-ui/core";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "../../components/DialogBox";
import FormUser from "../../components/FormUser";
import UserData from "./UserData";
import GetUserData from "./GetUserData/";
import UserApi from "./../../API/UserApi";
import SmallDialog from "./../../components/SmallDialog/SmallDialog";

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
  const [smallDialogState, setSmallDialogState] = React.useState(false);

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
              submitData={(handleClose) =>
                UserApi.addNewUser(jsonData, handleClose, setSmallDialogState)
              }
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
      <Grid item xs={12} component={Paper} className={classes.marginalized}>
        <SmallDialog
          smallDialogState={smallDialogState}
          setSmallDialogState={setSmallDialogState}
          title="Error"
          body="Please provide data to all Required Input Field(s) or Contact the System Administrator."
        />
      </Grid>
    </Grid>
  );
}
