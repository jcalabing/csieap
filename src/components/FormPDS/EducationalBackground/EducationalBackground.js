import React from "react";
import { Grid } from "@material-ui/core";

import { FormField, FieldDivider, FieldDate } from "./../../FormField";

import AddComponent from "./../../AddComponent/AddComponent";
import {
  CollegeField,
  GraduateField,
  VocationalField,
} from "./../../IncrementingComponent";
export default function EducationalBackground(props) {
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="III. EDUCATIONAL BACKGROUND" /> */}

      <FieldDivider label="ELEMENTARY" />
      <FormField idname="elementarySchool" label="SCHOOL NAME" />
      <FormField
        idname="elementaryDegree"
        label="BASIC EDUCATION/ DEGREE/ COURSE"
      />
      <FieldDate
        idname="elementaryFrom"
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FieldDate
        idname="elementaryTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="eelementaryLevel"
        label="HIGHEST LEVEL/ UNITS EARNED"
      />
      <FieldDate
        idname="elementaryYear"
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="elementaryHonor"
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
      />

      <FieldDivider label="SECONDARY" />
      <FormField idname="secondarySchool" label="SCHOOL NAME" />
      <FormField
        idname="secondaryDegree"
        label="BASIC EDUCATION/ DEGREE/ COURSE"
      />
      <FieldDate
        idname="secondaryFrom"
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FieldDate
        idname="secondaryTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField idname="secondaryLevel" label="HIGHEST LEVEL/ UNITS EARNED" />
      <FieldDate
        idname="secondaryYear"
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="secondaryHonor"
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
      />

      <FieldDivider label="VOCATIONAL/ TRADE" />

      <AddComponent>{VocationalField}</AddComponent>

      <FieldDivider label="COLLEGE" />
      <AddComponent>{CollegeField}</AddComponent>

      <FieldDivider label="GRADUATE STUDIES" />
      <AddComponent>{GraduateField}</AddComponent>
    </Grid>
  );
}
