import React from "react";
import { makeStyles, CssBaseline, Container, Grid } from "@material-ui/core";
import {
  FormField,
  FieldDivider,
  FieldDate,
  SelectField,
  RequiredField,
} from "../FormField/FormField";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function FormUser(props) {
  const classes = useStyles();
  const { saveData, userData, jsonData } = props;
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <RequiredField
            md={6}
            label="USERNAME"
            idname="username"
            value={jsonData.user_name}
            onChange={(e) => {
              saveData("user_name", e.target.value);
            }}
          />
          <RequiredField
            md={6}
            label="EMPLOYEE"
            idname="employee"
            value={jsonData.employee}
            onChange={(e) => {
              saveData("employee", e.target.value);
            }}
          />
          <RequiredField
            md={6}
            label="PASSWORD"
            idname="password"
            value={jsonData.password}
            onChange={(e) => {
              saveData("password", e.target.value);
            }}
          />
          <RequiredField
            md={6}
            label="RE-TYPE PASSWORD"
            idname="repassword"
            value={jsonData.repassword}
            onChange={(e) => {
              saveData("repassword", e.target.value);
            }}
          />
          <SelectField
            md={6}
            label="ACCOUNT TYPE"
            options={["HR", "ADMIN"]}
            idname="account_type"
            value={jsonData.account_type}
            onChange={(e) => {
              saveData("account_type", e.target.value);
            }}
          />
          <SelectField
            md={6}
            label="STATUS"
            options={["ACTIVE", "INACTIVE"]}
            idname="status"
            value={jsonData.account_status}
            onChange={(e) => {
              saveData("account_status", e.target.value);
            }}
          />
        </Grid>
      </form>
    </Container>
  );
}
