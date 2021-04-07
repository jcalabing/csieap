import React from "react";
import { Grid } from "@material-ui/core";
import {
  EligibilityField,
  WorkField,
  VoluntaryField,
  LearningField,
} from "./../../IncrementingComponent";
import { FieldDivider } from "./../../FormField";
import NewAddComponent from "./../../NewAddComponent";

export default function IvtoVii(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      <FieldDivider />
      <NewAddComponent
        value={jsonData.eligibility}
        onSave={saveData}
        dataKey={"eligibility"}
        title="IV. CAREER SERVICE/ RA 1080(BOARD/BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY/ DRIVERS LICENSE"
      >
        {EligibilityField}
      </NewAddComponent>

      <FieldDivider />
      <NewAddComponent
        value={jsonData.work}
        onSave={saveData}
        dataKey={"work"}
        title="V. WORK EXPERIENCE"
      >
        {WorkField}
      </NewAddComponent>

      <FieldDivider />
      <NewAddComponent
        value={jsonData.voluntary}
        onSave={saveData}
        dataKey={"voluntary"}
        title="VI. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC/ NON-GOVERNMENT/ PEOPLE/ VOLUNTARY ORGANIZATION"
      >
        {VoluntaryField}
      </NewAddComponent>
      <FieldDivider />
      <NewAddComponent
        value={jsonData.learning}
        onSave={saveData}
        dataKey={"learning"}
        title="VII. LEARNING AND DEVELOPMENT(L&D) INTERVENTIONS/ TRAINING PROGRAMS ATTENDED"
      >
        {LearningField}
      </NewAddComponent>
    </Grid>
  );
}
