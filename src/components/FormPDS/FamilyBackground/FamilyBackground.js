import React from "react";
import { Grid } from "@material-ui/core";

import { FormField, FieldDivider, FieldDate } from "./../../FormField";
import { ChildrenField } from "./../../IncrementingComponent/IncrementingComponent";
import AddComponent from "./../../AddComponent/AddComponent";

export default function FamilyBackground(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="II. FAMILY BACKGROUND" /> */}

      <FieldDivider label="SPOUSE" />
      <FormField
        label="SURNAME"
        idname="spouse_surname"
        value={jsonData.spouse_surname}
        onChange={(e) => {
          saveData("spouse_surname", e.target.value);
        }}
      />
      <FormField
        label="FIRST NAME"
        idname="spouse_firstname"
        value={jsonData.spouse_firstname}
        onChange={(e) => {
          saveData("spouse_firstname", e.target.value);
        }}
      />
      <FormField
        label="MIDDLE NAME"
        idname="spouse_middlename"
        value={jsonData.spouse_middlename}
        onChange={(e) => {
          saveData("spouse_middlename", e.target.value);
        }}
      />
      <FormField
        label="NAME EXTENSION"
        idname="spouse_extension"
        value={jsonData.spouse_extension}
        onChange={(e) => {
          saveData("spouse_extension", e.target.value);
        }}
      />
      <FormField
        label="OCCUPATION"
        idname="spouse_occupation"
        value={jsonData.spouse_occupation}
        onChange={(e) => {
          saveData("spouse_occupation", e.target.value);
        }}
      />
      <FormField
        label="EMPLOYER/BUSINESS NAME"
        idname="spouse_business"
        value={jsonData.spouse_business}
        onChange={(e) => {
          saveData("spouse_business", e.target.value);
        }}
      />
      <FormField
        label="BUSINESS ADDRESS"
        idname="spouse_business_address"
        value={jsonData.spouse_business_address}
        onChange={(e) => {
          saveData("spouse_business_address", e.target.value);
        }}
      />
      <FormField
        label="TELEPHONE NO"
        idname="spouse_telephone"
        value={jsonData.spouse_telephone}
        onChange={(e) => {
          saveData("spouse_telephone", e.target.value);
        }}
      />

      <FieldDivider label="CHILDREN" />
      <AddComponent>{ChildrenField}</AddComponent>

      <FieldDivider label="FATHER" />
      <FormField
        label="SURNAME"
        idname="father_surname"
        value={jsonData.father_surname}
        onChange={(e) => {
          saveData("father_surname", e.target.value);
        }}
      />
      <FormField
        label="FIRST NAME"
        idname="father_firstname"
        value={jsonData.father_firstname}
        onChange={(e) => {
          saveData("father_firstname", e.target.value);
        }}
      />
      <FormField
        label="MIDDLE NAME"
        idname="father_middlename"
        value={jsonData.father_middlename}
        onChange={(e) => {
          saveData("father_middlename", e.target.value);
        }}
      />
      <FormField
        label="NAME EXTENSION"
        idname="father_extension"
        value={jsonData.father_extension}
        onChange={(e) => {
          saveData("father_extension", e.target.value);
        }}
      />

      <FieldDivider label="MOTHER'S MAIDEN NAME" />
      <FormField
        label="SURNAME"
        idname="mother_surname"
        value={jsonData.mother_surname}
        onChange={(e) => {
          saveData("mother_surname", e.target.value);
        }}
      />
      <FormField
        label="FIRST NAME"
        idname="mother_firstname"
        value={jsonData.mother_firstname}
        onChange={(e) => {
          saveData("mother_firstname", e.target.value);
        }}
      />
      <FormField
        label="MIDDLE NAME"
        idname="mother_middlename"
        value={jsonData.mother_middlename}
        onChange={(e) => {
          saveData("mother_middlename", e.target.value);
        }}
      />
    </Grid>
  );
}
