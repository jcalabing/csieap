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
      />
    </Grid>
  );
}

function RequiredFields(props) {
  const { idname, label, type, defaultValue, md, sm, xs } = props;
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
      />
    </Grid>
  );
}

function SelectFields(props) {
  const { options, label, md, sm, xs } = props;
  return (
    <Grid item xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 3}>
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
  const defaultdate = React.useState(new Date());
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const { format, label, views, id, md, sm, xs } = props;
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
          value={selectedDate === defaultdate[0] ? null : selectedDate}
          onClick={() => console.log("test")}
          onChange={handleDateChange}
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
