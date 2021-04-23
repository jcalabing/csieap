import React from "react";
import { Button } from "@material-ui/core";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import EmployeeApi from "./../../API/EmployeeApi";
import FormPDS from "./../FormPDS";
import SmallDialog from "./../SmallDialog";
import DialogBox from "./../DialogBox";

export default function PDSBox(props) {
  const { title, buttonName, jsonData, isUpdate } = props;
  const [tempData, setValue] = React.useState(jsonData);
  const [smallDialogState, setSmallDialogState] = React.useState(false);

  const saveData = (Key, Value) => {
    var newValue = {};
    newValue[Key] = Value;
    const combinedData = { ...tempData, ...newValue };
    setValue(combinedData);
  };
  const doTrigger = (trigger) => {
    setValue(jsonData);
    trigger();
  };
  return (
    <>
      <MuiThemeProvider theme={Extheme}>
        <DialogBox
          title={title}
          triggerDialog={(trigger) => {
            return (
              <Button
                color="primary"
                variant="contained"
                onClick={() => doTrigger(trigger)}
              >
                {buttonName}
              </Button>
            );
          }}
          // submitData={() => console.log(tempData)}
          submitData={(handleClose) => {
            if (isUpdate === true) {
              // console.log("update");
              EmployeeApi.updateEmployee(
                tempData,
                handleClose,
                setSmallDialogState,
                jsonData["employee_id"]
              );
            } else {
              // console.log("add");
              console.warn(tempData);
              // EmployeeApi.addNewEmployee(
              //   tempData,
              //   handleClose,
              //   setSmallDialogState
              // );
            }
          }}
        >
          <FormPDS saveData={saveData} jsonData={tempData}></FormPDS>
        </DialogBox>
        <SmallDialog
          smallDialogState={smallDialogState}
          setSmallDialogState={setSmallDialogState}
          title="Error"
          body="Please provide data to all Required Input Field(s) or Contact the System Administrator."
        />
      </MuiThemeProvider>
    </>
  );
}
