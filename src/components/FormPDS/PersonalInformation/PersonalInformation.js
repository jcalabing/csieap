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
  return (
    <Grid container spacing={2}>
      {/* <FieldDivider label="I. PERSONAL INFORMATION" /> */}
      <RequiredField idname="surname" label="SURNAME" />
      <RequiredField idname="firstname" label="FIRST NAME" />
      <RequiredField idname="middlename" label="MIDDLE NAME" />
      <FormField idname="nameExt" label="NAME EXTENSION" />
      <FieldDate
        idname="dateBirth"
        label="DATE OF BIRTH"
        type="date"
        format="MM/dd/yyyy"
      />
      <FormField idname="placeBirth" label="PLACE OF BIRTH" />
      <SelectField label="SEX" options={["MALE", "FEMALE"]} />
      <SelectField
        label="CIVIL STATUS"
        options={["SINGLE", "MARRIED", "WIDOWED", "SEPERATED", "OTHERS"]}
      />

      <FormField idname="height" label="HEIGHT" />
      <FormField idname="weight" label="WEIGHT" />
      <FormField idname="bloodtype" label="BLOOD TYPE" />
      <FormField idname="gsisid" label="GSIS ID NO" />

      <FormField idname="pagibigid" label="PAG-IBIG ID NO" />
      <FormField idname="philhealth" label="PHILHEALTH NO" />
      <FormField idname="sssno" label="SSS NO" />
      <FormField idname="tinno" label="TIN NO" />

      <FormField idname="agencyemployee" label="AGENCY EMPLOYEE NO" />

      <FieldDivider label="CITIZENSHIP" />
      <SelectField
        label="CITIZENSHIP"
        options={["FILIPINO", "DUAL CITIZENSHIP"]}
      />
      <SelectField
        label="CITIZENSHIP BY"
        options={["BIRTH", "NATURALIZATION"]}
      />
      <FormField idname="citizenbycountry" label="COUNTRY" />

      <FieldDivider label="RESIDENTIAL ADDRESS" />
      <FormField idname="rhouse" label="HOUSE/ BLOCK/ LOT NO" />
      <FormField idname="rstreet" label="STREET" />
      <FormField idname="rsubvil" label="SUBDIVISION/ VILLAGE" />
      <FormField idname="rbarangay" label="BARANGAY" />
      <FormField idname="rcity" label="CITY MUNICIPALITY" />
      <FormField idname="rprovince" label="PROVINCE" />
      <FormField idname="rzip" label="ZIP CODE" />

      <FieldDivider label="PERMANENT ADDRESS" />
      <FormField idname="phouse" label="HOUSE/ BLOCK/ LOT NO" />
      <FormField idname="pstreet" label="STREET" />
      <FormField idname="psubvil" label="SUBDIVISION/ VILLAGE" />
      <FormField idname="pbarangay" label="BARANGAY" />
      <FormField idname="pcity" label="CITY MUNICIPALITY" />
      <FormField idname="pprovince" label="PROVINCE" />
      <FormField idname="pzip" label="ZIP CODE" />

      <FieldDivider label="CONTACT DETAILS" />
      <FormField idname="telephone" label="TELEPHONE NO" />
      <FormField idname="mobile" label="MOBILE NO" />
      <FormField idname="email" label="E-MAIL ADDRESS" />
    </Grid>
  );
}
