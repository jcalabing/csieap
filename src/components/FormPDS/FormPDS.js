import React from "react";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import TabAndTabs from "./../TabAndTabs";
import PersonalInformation from "./PersonalInformation";
import FamilyBackground from "./FamilyBackground/";
import EducationalBackground from "./EducationalBackground/";
import IvtoVii from "./IvtoVii";
import OtherInfo from "./OtherInfo";
import OfficeInfo from "./OfficeInfo";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function FormPDS(props) {
  const classes = useStyles();
  const { saveData, jsonData } = props;
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <form className={classes.form} noValidate>
        <TabAndTabs
          tabName={[
            "I. Personal Info",
            "II. Family Info",
            "III. Education Info",
            "IV - VII",
            "VIII. Other Info",
            "Office Info",
            // "I",
            // "II",
            // "III",
            // "IV - VII",
            // "VIII",
            // "IX",
          ]}
          tabContent={[
            <PersonalInformation saveData={saveData} jsonData={jsonData} />,
            <FamilyBackground saveData={saveData} jsonData={jsonData} />,
            <EducationalBackground saveData={saveData} jsonData={jsonData} />,
            <IvtoVii saveData={saveData} jsonData={jsonData} />,
            <OtherInfo saveData={saveData} jsonData={jsonData} />,
            <OfficeInfo saveData={saveData} jsonData={jsonData} />,
          ]}
        />
      </form>
    </Container>
  );
}
