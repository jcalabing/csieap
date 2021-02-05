import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

function FormFields(props) {
  const { idname, label, type, defaultValue } = props;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        variant="outlined"
        fullWidth
        id={idname}
        label={label}
        name={idname}
        type={type}
        defaultValue={defaultValue}
      />
    </Grid>
  );
}

function RequiredFields(props) {
  const { idname, label, type, defaultValue } = props;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        required
        variant="outlined"
        fullWidth
        id={idname}
        label={label}
        name={idname}
        type={type}
        defaultValue={defaultValue}
      />
    </Grid>
  );
}

function SelectFields(props) {
  const { options, label } = props;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <FormControl variant="outlined" fullWidth required>
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select native label={label} fullWidth required>
          <option aria-label="None" value="" />
          {options.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

function FieldDividers(props) {
  const { label } = props;
  return (
    <Grid item xs={12}>
      <Divider />
      <Typography component="h6" variant="h6">
        {label}
      </Typography>
    </Grid>
  );
}

export const FormField = FormFields;

export const RequiredField = RequiredFields;

export const SelectField = SelectFields;

export const FieldDivider = FieldDividers;
