import React from "react";
import { Grid } from "@material-ui/core";

import AddComponent from "./../../AddComponent";
import {
  EligibilityField,
  WorkField,
  VoluntaryField,
  LearningField,
} from "./../../IncrementingComponent";
import { FieldDivider } from "./../../FormField";

export default function IvtoVii(props) {
  const { saveData, jsonData } = props;
  return (
    <Grid container spacing={2}>
      <FieldDivider label="IV. CAREER SERVICE/ RA 1080(BOARD/BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY/ DRIVERS LICENSE" />
      <AddComponent>{EligibilityField}</AddComponent>
      <FieldDivider label="V. WORK EXPERIENCE" />
      <AddComponent>{WorkField}</AddComponent>

      <FieldDivider label="VI. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC/ NON-GOVERNMENT/ PEOPLE/ VOLUNTARY ORGANIZATION" />
      <AddComponent>{VoluntaryField}</AddComponent>

      <FieldDivider label="VII. LEARNING AND DEVELOPMENT(L&D) INTERVENTIONS/ TRAINING PROGRAMS ATTENDED" />
      <AddComponent>{LearningField}</AddComponent>
    </Grid>
  );
}
