import React from "react";
import { Button } from "@material-ui/core";
import Extheme from "./../../assets/Extheme/Extheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DialogBox from "./../DialogBox";
import PdfView from "./../PdfView";

export default function PDFBox(props) {
  const { title, buttonName, jsonData } = props;
  const [tempData, setValue] = React.useState(jsonData);

  return (
    <>
      <MuiThemeProvider theme={Extheme}>
        <DialogBox
          title={title}
          triggerDialog={(trigger) => {
            return (
              <Button color="secondary" variant="contained" onClick={trigger}>
                {buttonName}
              </Button>
            );
          }}
        >
          <PdfView jsonData={jsonData} />
        </DialogBox>
      </MuiThemeProvider>
    </>
  );
}
