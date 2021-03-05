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
  const { saveData, pdsData } = props;
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="I. PERSONAL INFORMATION" /> */}
      <RequiredField
        label="SURNAME"
        idname="surname"
        value={pdsData.surname}
        onChange={(e) => {
          saveData("surname", e.target.value);
        }}
      />
      <RequiredField
        label="FIRST NAME"
        idname="firstname"
        value={pdsData.firstname}
        onChange={(e) => {
          saveData("firstname", e.target.value);
        }}
      />
      <RequiredField
        label="MIDDLE NAME"
        idname="middlename"
        value={pdsData.middlename}
        onChange={(e) => {
          saveData("middlename", e.target.value);
        }}
      />
      <FormField
        label="NAME EXTENSION"
        idname="extension"
        value={pdsData.extension}
        onChange={(e) => {
          saveData("extension", e.target.value);
        }}
      />
      <FieldDate
        label="DATE OF BIRTH"
        type="date"
        format="MM/dd/yyyy"
        idname="date_birth"
        value={pdsData.date_birth}
        onChange={(e) => {
          console.log(e);
          saveData("date_birth", e);
        }}
      />
      <FormField
        label="PLACE OF BIRTH"
        idname="place_birth"
        value={pdsData.place_birth}
        onChange={(e) => {
          saveData("place_birth", e.target.value);
        }}
      />

      <SelectField
        label="SEX"
        options={["MALE", "FEMALE"]}
        idname="sex"
        value={pdsData.sex}
        onChange={(e) => {
          saveData("sex", e.target.value);
        }}
      />

      <SelectField
        label="CIVIL STATUS"
        options={["SINGLE", "MARRIED", "WIDOWED", "SEPERATED", "OTHERS"]}
        idname="civil_status"
        value={pdsData.civil_status}
        onChange={(e) => {
          saveData("civil_status", e.target.value);
        }}
      />

      <FormField
        label="HEIGHT"
        idname="height"
        value={pdsData.height}
        onChange={(e) => {
          saveData("height", e.target.value);
        }}
      />
      <FormField
        label="WEIGHT"
        idname="weight"
        value={pdsData.weight}
        onChange={(e) => {
          saveData("weight", e.target.value);
        }}
      />
      <FormField
        label="BLOOD TYPE"
        idname="blood_type"
        value={pdsData.blood_type}
        onChange={(e) => {
          saveData("blood_type", e.target.value);
        }}
      />
      <FormField
        label="GSIS ID NO"
        idname="gsis"
        value={pdsData.gsis}
        onChange={(e) => {
          saveData("gsis", e.target.value);
        }}
      />

      <FormField
        label="PAG-IBIG ID NO"
        idname="pagibig"
        value={pdsData.pagibig}
        onChange={(e) => {
          saveData("pagibig", e.target.value);
        }}
      />
      <FormField
        label="PHILHEALTH NO"
        idname="philhealth"
        value={pdsData.philhealth}
        onChange={(e) => {
          saveData("philhealth", e.target.value);
        }}
      />
      <FormField
        label="SSS NO"
        idname="sss"
        value={pdsData.sss}
        onChange={(e) => {
          saveData("sss", e.target.value);
        }}
      />
      <FormField
        label="TIN NO"
        idname="tin"
        value={pdsData.tin}
        onChange={(e) => {
          saveData("tin", e.target.value);
        }}
      />

      <FormField
        label="AGENCY EMPLOYEE NO"
        idname="employee_no"
        value={pdsData.employee_no}
        onChange={(e) => {
          saveData("employee_no", e.target.value);
        }}
      />

      <FieldDivider label="CITIZENSHIP" />
      <SelectField
        label="CITIZENSHIP"
        options={["FILIPINO", "DUAL CITIZENSHIP"]}
        idname="citizenship"
        value={pdsData.citizenship}
        onChange={(e) => {
          saveData("citizenship", e.target.value);
        }}
      />
      <SelectField
        label="CITIZENSHIP BY"
        options={["BIRTH", "NATURALIZATION"]}
        idname="dual_citizenship"
        value={pdsData.dual_citizenship}
        onChange={(e) => {
          saveData("dual_citizenship", e.target.value);
        }}
      />

      <FormField
        label="COUNTRY"
        idname="country"
        value={pdsData.country}
        onChange={(e) => {
          saveData("country", e.target.value);
        }}
      />

      <FieldDivider label="RESIDENTIAL ADDRESS" />
      <FormField
        label="HOUSE/ BLOCK/ LOT NO"
        idname="residential_house"
        value={pdsData.residential_house}
        onChange={(e) => {
          saveData("residential_house", e.target.value);
        }}
      />
      <FormField
        label="STREET"
        idname="residential_street"
        value={pdsData.residential_street}
        onChange={(e) => {
          saveData("residential_street", e.target.value);
        }}
      />
      <FormField
        label="SUBDIVISION/ VILLAGE"
        idname="residential_village"
        value={pdsData.residential_village}
        onChange={(e) => {
          saveData("residential_village", e.target.value);
        }}
      />
      <FormField
        label="BARANGAY"
        idname="residential_barangay"
        value={pdsData.residential_barangay}
        onChange={(e) => {
          saveData("residential_barangay", e.target.value);
        }}
      />
      <FormField
        label="CITY MUNICIPALITY"
        idname="residential_city"
        value={pdsData.residential_city}
        onChange={(e) => {
          saveData("residential_city", e.target.value);
        }}
      />
      <FormField
        label="PROVINCE"
        idname="residential_province"
        value={pdsData.residential_province}
        onChange={(e) => {
          saveData("residential_province", e.target.value);
        }}
      />
      <FormField
        label="ZIP CODE"
        idname="residential_zip"
        value={pdsData.residential_zip}
        onChange={(e) => {
          saveData("residential_zip", e.target.value);
        }}
      />

      <FieldDivider label="PERMANENT ADDRESS" />
      <FormField
        label="HOUSE/ BLOCK/ LOT NO"
        idname="permanent_house"
        value={pdsData.permanent_house}
        onChange={(e) => {
          saveData("permanent_house", e.target.value);
        }}
      />
      <FormField
        label="STREET"
        idname="permanent_street"
        value={pdsData.permanent_street}
        onChange={(e) => {
          saveData("permanent_street", e.target.value);
        }}
      />
      <FormField
        label="SUBDIVISION/ VILLAGE"
        idname="permanent_village"
        value={pdsData.permanent_village}
        onChange={(e) => {
          saveData("permanent_village", e.target.value);
        }}
      />
      <FormField
        label="BARANGAY"
        idname="permanent_barangay"
        value={pdsData.permanent_barangay}
        onChange={(e) => {
          saveData("permanent_barangay", e.target.value);
        }}
      />
      <FormField
        label="CITY MUNICIPALITY"
        idname="permanent_city"
        value={pdsData.permanent_city}
        onChange={(e) => {
          saveData("permanent_city", e.target.value);
        }}
      />
      <FormField
        label="PROVINCE"
        idname="permanent_province"
        value={pdsData.permanent_province}
        onChange={(e) => {
          saveData("permanent_province", e.target.value);
        }}
      />
      <FormField
        label="ZIP CODE"
        idname="permanent_zip"
        value={pdsData.permanent_zip}
        onChange={(e) => {
          saveData("permanent_zip", e.target.value);
        }}
      />

      <FieldDivider label="CONTACT DETAILS" />
      <FormField
        label="TELEPHONE NO"
        idname="telephone"
        value={pdsData.telephone}
        onChange={(e) => {
          saveData("telephone", e.target.value);
        }}
      />
      <FormField
        label="MOBILE NO"
        idname="mobile"
        value={pdsData.mobile}
        onChange={(e) => {
          saveData("mobile", e.target.value);
        }}
      />
      <FormField
        label="E-MAIL ADDRESS"
        idname="email"
        value={pdsData.email}
        onChange={(e) => {
          saveData("email", e.target.value);
        }}
      />
    </Grid>
  );
}
