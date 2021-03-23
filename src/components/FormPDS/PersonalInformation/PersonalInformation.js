import React from "react";
import { Grid } from "@material-ui/core";

import {
  FormField,
  RequiredField,
  SelectField,
  FieldDivider,
  FieldDate,
} from "./../../FormField";

export default function PersonalInformation(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="I. PERSONAL INFORMATION" /> */}
      <RequiredField
        label="SURNAME"
        idname="surname"
        value={jsonData.surname}
        onChange={(e) => {
          saveData("surname", e.target.value);
        }}
      />
      <RequiredField
        label="FIRST NAME"
        idname="firstname"
        value={jsonData.firstname}
        onChange={(e) => {
          saveData("firstname", e.target.value);
        }}
      />
      <RequiredField
        label="MIDDLE NAME"
        idname="middlename"
        value={jsonData.middlename}
        onChange={(e) => {
          saveData("middlename", e.target.value);
        }}
      />
      <FormField
        label="NAME EXTENSION"
        idname="extension"
        value={jsonData.extension}
        onChange={(e) => {
          saveData("extension", e.target.value);
        }}
      />
      <FieldDate
        label="DATE OF BIRTH"
        type="date"
        format="MM/dd/yyyy"
        idname="date_birth"
        value={jsonData.date_birth}
        onChange={(e) => {
          console.log(e);
          saveData("date_birth", e);
        }}
      />
      <FormField
        label="PLACE OF BIRTH"
        idname="place_birth"
        value={jsonData.place_birth}
        onChange={(e) => {
          saveData("place_birth", e.target.value);
        }}
      />

      <SelectField
        label="SEX"
        options={["MALE", "FEMALE"]}
        idname="sex"
        value={jsonData.sex}
        onChange={(e) => {
          saveData("sex", e.target.value);
        }}
      />

      <SelectField
        label="CIVIL STATUS"
        options={["SINGLE", "MARRIED", "WIDOWED", "SEPERATED", "OTHERS"]}
        idname="civil_status"
        value={jsonData.civil_status}
        onChange={(e) => {
          saveData("civil_status", e.target.value);
        }}
      />

      <FormField
        label="HEIGHT"
        idname="height"
        value={jsonData.height}
        onChange={(e) => {
          saveData("height", e.target.value);
        }}
      />
      <FormField
        label="WEIGHT"
        idname="weight"
        value={jsonData.weight}
        onChange={(e) => {
          saveData("weight", e.target.value);
        }}
      />
      <FormField
        label="BLOOD TYPE"
        idname="blood_type"
        value={jsonData.blood_type}
        onChange={(e) => {
          saveData("blood_type", e.target.value);
        }}
      />
      <FormField
        label="GSIS ID NO"
        idname="gsis"
        value={jsonData.gsis}
        onChange={(e) => {
          saveData("gsis", e.target.value);
        }}
      />

      <FormField
        label="PAG-IBIG ID NO"
        idname="pagibig"
        value={jsonData.pagibig}
        onChange={(e) => {
          saveData("pagibig", e.target.value);
        }}
      />
      <FormField
        label="PHILHEALTH NO"
        idname="philhealth"
        value={jsonData.philhealth}
        onChange={(e) => {
          saveData("philhealth", e.target.value);
        }}
      />
      <FormField
        label="SSS NO"
        idname="sss"
        value={jsonData.sss}
        onChange={(e) => {
          saveData("sss", e.target.value);
        }}
      />
      <FormField
        label="TIN NO"
        idname="tin"
        value={jsonData.tin}
        onChange={(e) => {
          saveData("tin", e.target.value);
        }}
      />

      <FormField
        label="AGENCY EMPLOYEE NO"
        idname="employee_no"
        value={jsonData.employee_no}
        onChange={(e) => {
          saveData("employee_no", e.target.value);
        }}
      />

      <FieldDivider label="CITIZENSHIP" />
      <SelectField
        label="CITIZENSHIP"
        options={["FILIPINO", "DUAL CITIZENSHIP"]}
        idname="citizenship"
        value={jsonData.citizenship}
        onChange={(e) => {
          saveData("citizenship", e.target.value);
        }}
      />
      <SelectField
        label="CITIZENSHIP BY"
        options={["BIRTH", "NATURALIZATION"]}
        idname="dual_citizenship"
        value={jsonData.dual_citizenship}
        onChange={(e) => {
          saveData("dual_citizenship", e.target.value);
        }}
      />

      <FormField
        label="COUNTRY"
        idname="country"
        value={jsonData.country}
        onChange={(e) => {
          saveData("country", e.target.value);
        }}
      />

      <FieldDivider label="RESIDENTIAL ADDRESS" />
      <FormField
        label="HOUSE/ BLOCK/ LOT NO"
        idname="residential_house"
        value={jsonData.residential_house}
        onChange={(e) => {
          saveData("residential_house", e.target.value);
        }}
      />
      <FormField
        label="STREET"
        idname="residential_street"
        value={jsonData.residential_street}
        onChange={(e) => {
          saveData("residential_street", e.target.value);
        }}
      />
      <FormField
        label="SUBDIVISION/ VILLAGE"
        idname="residential_village"
        value={jsonData.residential_village}
        onChange={(e) => {
          saveData("residential_village", e.target.value);
        }}
      />
      <FormField
        label="BARANGAY"
        idname="residential_barangay"
        value={jsonData.residential_barangay}
        onChange={(e) => {
          saveData("residential_barangay", e.target.value);
        }}
      />
      <FormField
        label="CITY MUNICIPALITY"
        idname="residential_city"
        value={jsonData.residential_city}
        onChange={(e) => {
          saveData("residential_city", e.target.value);
        }}
      />
      <FormField
        label="PROVINCE"
        idname="residential_province"
        value={jsonData.residential_province}
        onChange={(e) => {
          saveData("residential_province", e.target.value);
        }}
      />
      <FormField
        label="ZIP CODE"
        idname="residential_zip"
        value={jsonData.residential_zip}
        onChange={(e) => {
          saveData("residential_zip", e.target.value);
        }}
      />

      <FieldDivider label="PERMANENT ADDRESS" />
      <FormField
        label="HOUSE/ BLOCK/ LOT NO"
        idname="permanent_house"
        value={jsonData.permanent_house}
        onChange={(e) => {
          saveData("permanent_house", e.target.value);
        }}
      />
      <FormField
        label="STREET"
        idname="permanent_street"
        value={jsonData.permanent_street}
        onChange={(e) => {
          saveData("permanent_street", e.target.value);
        }}
      />
      <FormField
        label="SUBDIVISION/ VILLAGE"
        idname="permanent_village"
        value={jsonData.permanent_village}
        onChange={(e) => {
          saveData("permanent_village", e.target.value);
        }}
      />
      <FormField
        label="BARANGAY"
        idname="permanent_barangay"
        value={jsonData.permanent_barangay}
        onChange={(e) => {
          saveData("permanent_barangay", e.target.value);
        }}
      />
      <FormField
        label="CITY MUNICIPALITY"
        idname="permanent_city"
        value={jsonData.permanent_city}
        onChange={(e) => {
          saveData("permanent_city", e.target.value);
        }}
      />
      <FormField
        label="PROVINCE"
        idname="permanent_province"
        value={jsonData.permanent_province}
        onChange={(e) => {
          saveData("permanent_province", e.target.value);
        }}
      />
      <FormField
        label="ZIP CODE"
        idname="permanent_zip"
        value={jsonData.permanent_zip}
        onChange={(e) => {
          saveData("permanent_zip", e.target.value);
        }}
      />

      <FieldDivider label="CONTACT DETAILS" />
      <FormField
        label="TELEPHONE NO"
        idname="telephone"
        value={jsonData.telephone}
        onChange={(e) => {
          saveData("telephone", e.target.value);
        }}
      />
      <FormField
        label="MOBILE NO"
        idname="mobile"
        value={jsonData.mobile}
        onChange={(e) => {
          saveData("mobile", e.target.value);
        }}
      />
      <FormField
        label="E-MAIL ADDRESS"
        idname="email"
        value={jsonData.email}
        onChange={(e) => {
          saveData("email", e.target.value);
        }}
      />
    </Grid>
  );
}
