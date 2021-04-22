import React from "react";
import { Button } from "@material-ui/core";
import DialogBox from "./../DialogBox";
import ViewDialog from "./../ViewDialog";
import EmpViewData from "./../EmpViewData";

export default function EmpView(props) {
  const { title, buttonName, jsonData } = props;
  const [tempData, setValue] = React.useState(jsonData);

  return (
    <>
      <ViewDialog
        title={title}
        triggerDialog={(trigger) => {
          return (
            <Button color="primary" variant="contained" onClick={trigger}>
              {buttonName}
            </Button>
          );
        }}
      >
        <EmpViewData />
      </ViewDialog>
    </>
  );
}
