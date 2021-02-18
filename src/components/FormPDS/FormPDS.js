import React from "react";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import TabAndTabs from "./../TabAndTabs/TabAndTabs";
import PersonalInformation from "./PersonalInformation";
import FamilyBackground from "./FamilyBackground/";
import EducationalBackground from "./EducationalBackground/";
import IvtoVii from "./IvtoVii/IvtoVii";
import OtherInfo from "./OtherInfo/OtherInfo";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function FormPDS() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          ]}
          tabContent={[
            <PersonalInformation />,
            <FamilyBackground />,
            <EducationalBackground />,
            <IvtoVii />,
            <OtherInfo />,
          ]}
        />
      </form>
    </Container>
  );
}
