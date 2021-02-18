import React from "react";
import { Grid } from "@material-ui/core";
import {
  FormField,
  FieldDivider,
  FieldDate,
  SelectField,
} from "./../FormField/FormField";

export function HobbyField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField
        idname="ssurname"
        label="SPECIAL SKILLS AND HOBBIES"
        md={3}
        sm={12}
      />
      <FormField
        idname="sfirstname"
        label="NON-ACADEMIC/ RECOGNITION"
        sm={12}
        md={5}
      />
      <FormField
        idname="sfirstname"
        label="MEMBERSHIP IN ASSOCIATION/ ORGANIZATION"
        sm={12}
        md={4}
      />
    </Grid>
  );
}

export function ReferenceField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField idname="sfirstname" label="NAME" sm={12} md={4} />
      <FormField idname="sfirstname" label="ADDRESS" sm={12} md={4} />
      <FormField idname="sfirstname" label="TEL. NO." sm={12} md={4} />
    </Grid>
  );
}

export function EligibilityField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField idname="ssurname" label="ELIGIBILITY" md={9} sm={9} />
      <FormField idname="sfirstname" label="RATING" sm={3} />
      <FieldDate
        idname="examDate"
        label="EXAMNATION/ CONFERMENT"
        type="date"
        format="MM/dd/yyyy"
      />
      <FormField idname="smiddlename" label="PLACE" />
      <FormField idname="snameext" label="NUMBER" />
      <FieldDate
        idname="licenseValidity"
        label="VALIDITY"
        type="date"
        format="MM/dd/yyyy"
      />
    </Grid>
  );
}

export function WorkField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FieldDate
        idname="childbday"
        label="FROM"
        type="date"
        format="MM/dd/yyyy"
      />
      <FieldDate
        idname="childbday"
        label="TO"
        type="date"
        format="MM/dd/yyyy"
      />
      <FormField idname="childrenName" label="POSITION TITLE" md={6} />
      <FormField
        idname="childrenName"
        label="DEPARTMENT/ AGENCY/ OFFICE/ COMPANY"
        md={4}
      />
      <FormField idname="childrenName" label="MONTHLY SALARY" md={2} />
      <FormField idname="childrenName" label="SALARY GRADE" md={2} />
      <FormField idname="childrenName" label="STATUS OF APPOINTMENT" md={3} />
      <SelectField label="GOV'T SERVICE" options={["YES", "NO"]} md={1} />
    </Grid>
  );
}

export function VoluntaryField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField
        idname="fsurname"
        label="NAME & ADDRESS OF ORGANIZATION"
        md={12}
      />
      <FieldDate
        idname="childbday"
        label="FROM"
        type="date"
        format="MM/dd/yyyy"
        md={2}
      />
      <FieldDate
        idname="childbday"
        label="TO"
        type="date"
        format="MM/dd/yyyy"
        md={2}
      />
      <FormField idname="ffirstname" label="NO OF HOURS" md={2} />
      <FormField idname="fmiddlename" label="POSITION NATURE OF WORK" md={6} />
    </Grid>
  );
}

export function LearningField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField idname="msurname" label="TITLE" md={6} />
      <FieldDate
        idname="childbday"
        label="FROM"
        type="date"
        format="MM/dd/yyyy"
        md={3}
      />
      <FieldDate
        idname="childbday"
        label="TO"
        type="date"
        format="MM/dd/yyyy"
        md={3}
      />
      <FormField idname="mfirstname" label="NO OF HOURS" md={3} />
      <FormField idname="mmiddlename" label="TYPE OF LD" md={3} />
      <FormField idname="mfirstname" label="CONDUCTED SPONSOR" md={6} />
    </Grid>
  );
}

export function ChildrenField(props) {
  return (
    <Grid container spacing={2} key={props.key}>
      <FieldDivider />
      <FormField idname="childrenName" label="NAME OF CHILDREN" md={9} />
      <FieldDate
        idname="childbday"
        label="DATE OF BIRTH"
        type="date"
        format="MM/dd/yyyy"
      />
    </Grid>
  );
}
