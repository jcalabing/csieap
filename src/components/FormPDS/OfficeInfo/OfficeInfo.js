import React from "react";
import { Grid } from "@material-ui/core";

import {
  FormField,
  RequiredField,
  SelectField,
  FieldDivider,
  FieldDate,
} from "./../../FormField";

import PhotoFile from "./../../PhotoFile/PhotoFile";

export default function OfficeInfo(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <FieldDate
            label="PCA APPOINTMENT DATE"
            type="date"
            format="MM/dd/yyyy"
            md={12}
            idname="appointment_date"
            value={jsonData.appointment_date}
            onChange={(e) => {
              saveData("appointment_date", e);
            }}
          />

          <FormField
            label="BIO"
            md={12}
            idname="BIO"
            multiline={true}
            rows={8}
            value={jsonData.bio}
            onChange={(e) => {
              saveData("bio", e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <PhotoFile
          value={jsonData.photo}
          onChange={(e) => {
            saveData("photoData", e);
          }}
        />
      </Grid>
    </Grid>
  );
}
