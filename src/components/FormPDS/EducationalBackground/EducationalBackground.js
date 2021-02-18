import React from "react";
import { Grid } from "@material-ui/core";

import { FormField, FieldDivider, FieldDate } from "./../../FormField";

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
      <FormField idname="vocationalSchool" label="SCHOOL NAME" />
      <FormField
        idname="vocationalDegree"
        label="BASIC EDUCATION/ DEGREE/ COURSE"
      />
      <FieldDate
        idname="vocationalFrom"
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FieldDate
        idname="vocationalTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField idname="vocationalLevel" label="HIGHEST LEVEL/ UNITS EARNED" />
      <FieldDate
        idname="vocationalYear"
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="vocationalHonor"
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
      />

      <FieldDivider label="COLLEGE" />
      <FormField idname="collegeSchool" label="SCHOOL NAME" />
      <FormField
        idname="collegeDegree"
        label="BASIC EDUCATION/ DEGREE/ COURSE"
      />
      <FieldDate
        idname="collegeFrom"
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FieldDate
        idname="collegeTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField idname="collegeLevel" label="HIGHEST LEVEL/ UNITS EARNED" />
      <FieldDate
        idname="collegeYear"
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="collegeHonor"
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
      />

      <FieldDivider label="GRADUATE STUDIES" />
      <FormField idname="graduateSchool" label="SCHOOL NAME" />
      <FormField
        idname="graduateDegree"
        label="BASIC EDUCATION/ DEGREE/ COURSE"
      />
      <FieldDate
        idname="graduateFrom"
        label="FROM"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FieldDate
        idname="graduateTo"
        label="TO"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField idname="graduateLevel" label="HIGHEST LEVEL/ UNITS EARNED" />
      <FieldDate
        idname="graduateYear"
        label="YEAR GRADUATED"
        views={["year"]}
        type="date"
        format="yyyy"
      />
      <FormField
        idname="graduateHonor"
        label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
        md={6}
      />
    </Grid>
  );
}
