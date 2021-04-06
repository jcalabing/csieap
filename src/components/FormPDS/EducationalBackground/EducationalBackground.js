import React from "react";
import { Grid } from "@material-ui/core";

import { FormField, FieldDivider, FieldDate } from "./../../FormField";

import NewAddComponent from "./../../NewAddComponent";
import {
  CollegeField,
  GraduateField,
  VocationalField,
} from "./../../IncrementingComponent";
export default function EducationalBackground(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="III. EDUCATIONAL BACKGROUND" /> */}

      <FieldDivider label="ELEMENTARY" />
      <FormField
        label="SCHOOL NAME"
        idname="elementary_name"
        value={jsonData.elementary_name}
        onChange={(e) => {
          saveData("elementary_name", e.target.value);
        }}
      />
      <FormField
        label="BASIC EDUCATION/ DEGREE/ COURSE"
        idname="elementary_basic"
        value={jsonData.elementary_basic}
        onChange={(e) => {
          saveData("elementary_basic", e.target.value);
        }}
      />
      <FieldDate
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="elementary_from"
        value={jsonData.elementary_from}
        onChange={(e) => {
          saveData("elementary_from", e);
        }}
      />
      <FieldDate
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="elementary_to"
        value={jsonData.elementary_to}
        onChange={(e) => {
          saveData("elementary_to", e);
        }}
      />
      <FormField
        label="HIGHEST LEVEL/ UNITS EARNED"
        idname="elementary_level"
        value={jsonData.elementary_level}
        onChange={(e) => {
          saveData("elementary_level", e.target.value);
        }}
      />
      <FieldDate
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="elementary_year"
        value={jsonData.elementary_year}
        onChange={(e) => {
          saveData("elementary_year", e);
        }}
      />
      <FormField
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
        idname="elementary_honor"
        value={jsonData.elementary_honor}
        onChange={(e) => {
          saveData("elementary_honor", e.target.value);
        }}
      />

      <FieldDivider label="SECONDARY" />
      <FormField
        label="SCHOOL NAME"
        idname="secondary_name"
        value={jsonData.secondary_name}
        onChange={(e) => {
          saveData("secondary_name", e.target.value);
        }}
      />
      <FormField
        label="BASIC EDUCATION/ DEGREE/ COURSE"
        idname="secondary_basic"
        value={jsonData.secondary_basic}
        onChange={(e) => {
          saveData("secondary_basic", e.target.value);
        }}
      />
      <FieldDate
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="secondary_from"
        value={jsonData.secondary_from}
        onChange={(e) => {
          saveData("secondary_from", e);
        }}
      />
      <FieldDate
        idname="secondaryTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="secondary_to"
        value={jsonData.secondary_to}
        onChange={(e) => {
          saveData("secondary_to", e);
        }}
      />
      <FormField
        label="HIGHEST LEVEL/ UNITS EARNED"
        idname="secondary_level"
        value={jsonData.secondary_level}
        onChange={(e) => {
          saveData("secondary_level", e.target.value);
        }}
      />
      <FieldDate
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
        idname="secondary_year"
        value={jsonData.secondary_year}
        onChange={(e) => {
          saveData("secondary_year", e);
        }}
      />
      <FormField
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
        idname="secondary_honor"
        value={jsonData.secondary_honor}
        onChange={(e) => {
          saveData("secondary_honor", e.target.value);
        }}
      />

      <NewAddComponent
        value={jsonData.vocational}
        onSave={saveData}
        dataKey={"vocational"}
        title="VOCATIONAL/TRADE"
      >
        {VocationalField}
      </NewAddComponent>

      <NewAddComponent
        value={jsonData.college}
        onSave={saveData}
        dataKey={"college"}
        title="COLLEGE"
      >
        {CollegeField}
      </NewAddComponent>

      <NewAddComponent
        value={jsonData.graduate}
        onSave={saveData}
        dataKey={"graduate"}
        title="GRADUATE STUDIES"
      >
        {GraduateField}
      </NewAddComponent>
    </Grid>
  );
}
