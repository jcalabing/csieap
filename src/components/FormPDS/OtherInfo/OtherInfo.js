import React from "react";
import { Grid, Typography } from "@material-ui/core";

import AddComponent from "./../../AddComponent/AddComponent";
import NewAddComponent from "./../../NewAddComponent";
import { HobbyField, ReferenceField } from "./../../IncrementingComponent";
import {
  FormField,
  FieldDivider,
  FieldDate,
  SelectField,
} from "./../../FormField";

export default function OtherInfo(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      <FieldDivider />
      <NewAddComponent
        value={jsonData.hobbies}
        onSave={saveData}
        dataKey={"hobbies"}
        title="VIII. OTHER INFORMATION"
      >
        {HobbyField}
      </NewAddComponent>
      <FieldDivider />
      <Typography>
        Are you related by consanguinity or affinity to the appointing or
        recommending authority, or to the chief of bureau or office or to the
        person who has immediate supervisor over you in the Office, Bureau or
        Department where you will be appointed.
      </Typography>
      <SelectField
        label="a. within the third degree?"
        options={["YES", "NO"]}
        md={12}
        sm={12}
        idname="related_third"
        value={jsonData.related_third}
        onChange={(e) => {
          saveData("related_third", e.target.value);
        }}
      />
      <SelectField
        label="b. within the fourth degree (for Local Government Unit - Career
        Employees)?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="related_fourth"
        value={jsonData.related_fourth}
        onChange={(e) => {
          saveData("related_fourth", e.target.value);
        }}
      />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
        idname="related_detail"
        value={jsonData.related_detail}
        onChange={(e) => {
          saveData("related_detail", e.target.value);
        }}
      />
      <FieldDivider />
      <SelectField
        label="a. Have you ever been found guilty of any administrative offense?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="guilty"
        value={jsonData.guilty}
        onChange={(e) => {
          saveData("guilty", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="guilty_detail"
        value={jsonData.guilty_detail}
        onChange={(e) => {
          saveData("guilty_detail", e.target.value);
        }}
      />
      <SelectField
        label="b. Have you been criminally charged before any court?"
        options={["YES", "NO"]}
        md={4}
        sm={6}
        idname="charged"
        value={jsonData.charged}
        onChange={(e) => {
          saveData("charged", e.target.value);
        }}
      />
      <FieldDate
        label="if YES, Date Filed"
        type="date"
        format="MM/dd/yyyy"
        idname="charged_date"
        value={jsonData.charged_date}
        onChange={(e) => {
          saveData("charged_date", e);
        }}
      />
      <FormField
        label="Status of Case/s"
        sm={6}
        md={4}
        idname="charged_status"
        value={jsonData.charged_status}
        onChange={(e) => {
          saveData("charged_status", e.target.value);
        }}
      />
      <FieldDivider />
      <Typography>
        Have you ever been convicted of any crime or violation of any law,
        decree, ordinance or regulation by any court or tribunal?
      </Typography>
      <SelectField
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="convicted"
        value={jsonData.convicted}
        onChange={(e) => {
          saveData("convicted", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="convicted_detail"
        value={jsonData.convicted_detail}
        onChange={(e) => {
          saveData("convicted_detail", e.target.value);
        }}
      />
      <FieldDivider />
      <Typography>
        Have you ever been seperated from the service in any of the following
        modes: resignation, retirement, dropped from the rolls, dismissal,
        termination, end of term, finished contract or phased out(abolition) in
        the public or private sector?
      </Typography>
      <SelectField
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="separated_service"
        value={jsonData.separated_service}
        onChange={(e) => {
          saveData("separated_service", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="separated_service_detail"
        value={jsonData.separated_service_detail}
        onChange={(e) => {
          saveData("separated_service_detail", e.target.value);
        }}
      />
      <FieldDivider />
      <Typography>
        a. Have you ever been a candidate in a national or local election held
        within the last year(except Barangay election)?
      </Typography>
      <SelectField
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="candidate"
        value={jsonData.candidate}
        onChange={(e) => {
          saveData("candidate", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="candidate_detail"
        value={jsonData.candidate_detail}
        onChange={(e) => {
          saveData("candidate_detail", e.target.value);
        }}
      />
      <Typography>
        b. Have you resigned from the government service during the three
        (3)-month period before the last election to promote/actively campaign
        for a nationl or local candidate?
      </Typography>
      <SelectField
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="resign_for_campaign"
        value={jsonData.resign_for_campaign}
        onChange={(e) => {
          saveData("resign_for_campaign", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="resign_for_campaign_detail"
        value={jsonData.resign_for_campaign_detail}
        onChange={(e) => {
          saveData("resign_for_campaign_detail", e.target.value);
        }}
      />
      <FieldDivider />
      <Typography>
        a. Have you acquired the status of an immigrant or permanent resident of
        another country?
      </Typography>
      <SelectField
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="immigrant"
        value={jsonData.immigrant}
        onChange={(e) => {
          saveData("immigrant", e.target.value);
        }}
      />
      <FormField
        label="If YES, give details"
        sm={6}
        md={6}
        idname="immigrant_detail"
        value={jsonData.immigrant_detail}
        onChange={(e) => {
          saveData("immigrant_detail", e.target.value);
        }}
      />
      <FieldDivider label="Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000(RA 8972), please answer the following items:" />
      <SelectField
        label="a. Are you a member of any indigenous group?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="indigenous_group"
        value={jsonData.indigenous_group}
        onChange={(e) => {
          saveData("indigenous_group", e.target.value);
        }}
      />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
        idname="indigenous_group_detail"
        value={jsonData.indigenous_group_detail}
        onChange={(e) => {
          saveData("indigenous_group_detail", e.target.value);
        }}
      />
      <SelectField
        label="b. Are you a person with disability?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="disability"
        value={jsonData.disability}
        onChange={(e) => {
          saveData("disability", e.target.value);
        }}
      />
      <FormField
        idname="sfirstname"
        label="If YES, please specify ID No"
        sm={6}
        md={6}
        idname="disability_id"
        value={jsonData.disability_id}
        onChange={(e) => {
          saveData("disability_id", e.target.value);
        }}
      />
      <SelectField
        label="c. Are you a solo parent?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
        idname="solo_parent"
        value={jsonData.solo_parent}
        onChange={(e) => {
          saveData("solo_parent", e.target.value);
        }}
      />
      <FormField
        label="If YES, please specify ID No"
        sm={6}
        md={6}
        idname="solo_parent_id"
        value={jsonData.solo_parent_id}
        onChange={(e) => {
          saveData("solo_parent_id", e.target.value);
        }}
      />
      <FieldDivider />
      <NewAddComponent
        value={jsonData.references}
        onSave={saveData}
        dataKey={"references"}
        title="REFERENCES (Person not related by consanguinity or affinity to applicant/appointee)"
      >
        {ReferenceField}
      </NewAddComponent>
      <FieldDivider label="GOVERNMENT ISSUED ID" />
      <FormField
        label="GOVERNMENT ISSUED ID"
        sm={6}
        md={4}
        idname="issued_id"
        value={jsonData.issued_id}
        onChange={(e) => {
          saveData("issued_id", e.target.value);
        }}
      />
      <FormField
        label="ID NUMBER"
        sm={6}
        md={4}
        idname="issued_id_number"
        value={jsonData.issued_id_number}
        onChange={(e) => {
          saveData("issued_id_number", e.target.value);
        }}
      />
      <FormField
        label="ISSUANCE DETAILS"
        sm={6}
        md={4}
        idname="issued_detail"
        value={jsonData.issued_detail}
        onChange={(e) => {
          saveData("issued_detail", e.target.value);
        }}
      />
    </Grid>
  );
}
