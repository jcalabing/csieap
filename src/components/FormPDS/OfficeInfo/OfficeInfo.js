import React from "react";
import { Grid } from "@material-ui/core";

import {
  FormField,
  RequiredField,
  SelectField,
  FieldDivider,
  FieldDate,
} from "./../../FormField";

export default function OfficeInfo(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="I. PERSONAL INFORMATION" /> */}
      <RequiredField
        label="POSITION TITLE"
        idname="position_title"
        md={6}
        value={jsonData.position_title}
        onChange={(e) => {
          saveData("position_title", e.target.value);
        }}
      />

      <FieldDate
        label="APPOINTMENT DATE"
        type="date"
        format="MM/dd/yyyy"
        md={6}
        idname="appointment_date"
        value={jsonData.appointment_date}
        onChange={(e) => {
          console.log(e);
          saveData("appointment_date", e);
        }}
      />
      <FormField
        label="UNIT"
        idname="department"
        md={6}
        value={jsonData.department}
        onChange={(e) => {
          saveData("department", e.target.value);
        }}
      />

      <SelectField
        label="APPOINTMENT STATUS"
        options={["Job Order", "Contract of Service", "Regular"]}
        idname="appointment_status"
        md={6}
        value={jsonData.appointment_status}
        onChange={(e) => {
          saveData("appointment_status", e.target.value);
        }}
      />
      <FormField
        label="PCA ID"
        idname="pca_id"
        md={6}
        value={jsonData.pca_id}
        onChange={(e) => {
          saveData("pca_id", e.target.value);
        }}
      />
    </Grid>
  );
}
