import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

function FormFields(props) {
  const {
    idname,
    label,
    type,
    defaultValue,
    views,
    format,
    md,
    sm,
    xs,
    onChange,
    value,
  } = props;
  return (
    <Grid item xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 3}>
      <TextField
        variant="outlined"
        fullWidth
        id={idname}
        label={label}
        name={idname}
        type={type}
        defaultValue={defaultValue}
        views={views}
        format={format}
        onChange={onChange}
        value={value}
      />
    </Grid>
  );
}

function RequiredFields(props) {
  const {
    idname,
    label,
    type,
    defaultValue,
    md,
    sm,
    xs,
    onChange,
    value,
  } = props;
  return (
    <Grid item xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 3}>
      <TextField
        required
        variant="outlined"
        fullWidth
        id={idname}
        label={label}
        name={idname}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      />
    </Grid>
  );
}

function SelectFields(props) {
  const { options, label, md, sm, xs, value, onChange } = props;
  return (
    <Grid item xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 3}>
      <FormControl variant="outlined" fullWidth required>
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select native label={label} fullWidth required onChange={onChange}>
          <option value={value}>{value}</option>
          {options.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

function FieldDividers(props) {
  const { label, children } = props;
  return (
    <Grid item xs={12}>
      <Divider />
      <Typography component="h6" variant="h6">
        {label}
        {children}
      </Typography>
    </Grid>
  );
}

function FieldDates(props) {
  const { format, label, views, id, md, sm, xs, onChange, value } = props;
  const [selectedDate, handleDateChange] = React.useState(
    value == null ? new Date() : value
  );
  return (
    <Grid item xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 3}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          autoOk
          variant="inline"
          inputVariant="outlined"
          id={id}
          label={label}
          format={format}
          views={views}
          defaultValue={value}
          value={selectedDate}
          onChange={(e) => {
            onChange(e);
            handleDateChange(e);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}

export const FormField = FormFields;

export const RequiredField = RequiredFields;

export const SelectField = SelectFields;

export const FieldDivider = FieldDividers;

export const FieldDate = FieldDates;
