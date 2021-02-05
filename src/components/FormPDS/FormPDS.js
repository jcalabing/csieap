import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Divider from "@material-ui/core/Divider";
import {
  FormField,
  RequiredField,
  SelectField,
  FieldDivider,
} from "./../FormField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormPDS() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          PERSONAL DATA SHEET
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <FieldDivider label="PERSONAL INFORMATION" />
            <RequiredField idname="surname" label="Surname" />
            <RequiredField idname="firstname" label="First Name" />
            <RequiredField idname="middlename" label="Middle Name" />
            <FormField idname="nameExt" label="Name Extension" />

            <RequiredField
              idname="dateBirth"
              label="Date of Birth"
              type="date"
              defaultValue="2021-01-01"
            />
            <FormField idname="placeBirth" label="Place of Birth" />
            <SelectField label="SEX" options={["MALE", "FEMALE"]} />
            <SelectField
              label="Civil Status"
              options={["SINGLE", "MARRIED", "WIDOWED", "SEPERATED", "OTHERS"]}
            />

            <FormField idname="height" label="Height" />
            <FormField idname="weight" label="Weight" />
            <FormField idname="bloodtype" label="Blood Type" />
            <FormField idname="gsisid" label="GSIS ID NO" />

            <FormField idname="pagibigid" label="PAG-IBIG ID NO" />
            <FormField idname="philhealth" label="PHILHEALTH NO" />
            <FormField idname="sssno" label="SSS NO" />
            <FormField idname="tinno" label="TIN NO" />

            <FormField idname="agencyemployee" label="AGENCY EMPLOYEE NO" />

            <FieldDivider label="CITIZENSHIP" />
            <SelectField
              label="CITIZENSHIP"
              options={["FILIPINO", "DUAL CITIZENSHIP"]}
            />
            <SelectField
              label="CITIZENSHIP BY"
              options={["BIRTH", "NATURALIZATION"]}
            />
            <FormField idname="citizenbycountry" label="COUNTRY" />

            <FieldDivider label="RESIDENTIAL ADDRESS" />
            <FormField idname="rhouse" label="House/Block/Lot No" />
            <FormField idname="rstreet" label="Street" />
            <FormField idname="rsubvil" label="Subdivision/Village" />
            <FormField idname="rbarangay" label="Barangay" />
            <FormField idname="rcity" label="City/Municipality" />
            <FormField idname="rprovince" label="Province" />
            <FormField idname="rzip" label="ZIP CODE" />

            <FieldDivider label="PERMANENT ADDRESS" />
            <FormField idname="phouse" label="House/Block/Lot No" />
            <FormField idname="pstreet" label="Street" />
            <FormField idname="psubvil" label="Subdivision/Village" />
            <FormField idname="pbarangay" label="Barangay" />
            <FormField idname="pcity" label="City/Municipality" />
            <FormField idname="pprovince" label="Province" />
            <FormField idname="pzip" label="ZIP CODE" />

            <FieldDivider label="CONTACT DETAILS" />
            <FormField idname="telephone" label="TELEPHONE NO" />
            <FormField idname="mobile" label="MOBILE NO" />
            <FormField idname="email" label="E-MAIL ADDRESS" />

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
