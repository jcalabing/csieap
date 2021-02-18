import React from "react";
import { Grid } from "@material-ui/core";

import { FormField, FieldDivider, FieldDate } from "./../../FormField";
import { ChildrenField } from "./../../IncrementingComponent/IncrementingComponent";
import AddComponent from "./../../AddComponent/AddComponent";

export default function FamilyBackground(props) {
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="II. FAMILY BACKGROUND" /> */}

      <FieldDivider label="SPOUSE" />
      <FormField idname="ssurname" label="SURNAME" />
      <FormField idname="sfirstname" label="FIRST NAME" />
      <FormField idname="smiddlename" label="MIDDLE NAME" />
      <FormField idname="snameext" label="NAME EXTENSION" />
      <FormField idname="soccupation" label="OCCUPATION" />
      <FormField idname="semployer" label="EMPLOYER/BUSINESS NAME" />
      <FormField idname="sbusinessadd" label="BUSINESS ADDRESS" />
      <FormField idname="stelephone" label="TELEPHONE NO" />

      <FieldDivider label="CHILDREN" />
      <AddComponent>{ChildrenField}</AddComponent>

      <FieldDivider label="FATHER" />
      <FormField idname="fsurname" label="SURNAME" />
      <FormField idname="ffirstname" label="FIRST NAME" />
      <FormField idname="fmiddlename" label="MIDDLE NAME" />
      <FormField idname="fnameext" label="NAME EXTENSION" />

      <FieldDivider label="MOTHER'S MAIDEN NAME" />
      <FormField idname="msurname" label="SURNAME" />
      <FormField idname="mfirstname" label="FIRST NAME" />
      <FormField idname="mmiddlename" label="MIDDLE NAME" />
    </Grid>
  );
}
