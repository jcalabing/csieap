import connect from "./../Connect";
import SmallDialog from "./../../components/SmallDialog/SmallDialog";

export default function Request(
  method,
  url,
  setResponseData,
  handleClose,
  setSmallDialogState
) {
  connect
    .getData(method, url, setResponseData, setSmallDialogState)
    .then((response) => {
      if (method === "GET") {
        var finalData = [];
        var i = 0;
        response.data.forEach((e) => {
          i++;
          e.id = i;
          finalData.push(e);
        });
        setResponseData(finalData);
      }
      if (method === "POST") {
        if (response.data.success) {
          console.log("Data Posted");
          console.log(response.data.message);
          // handleClose();
          // window.location.reload();
          return true;
        }
      }
      if (method === "PUT") {
        if (response.data.success) {
          console.log("Data Updated");
          console.log(response.data.message);
          // handleClose();
          // window.location.reload();
          return true;
        }
      }
    })
    .catch((error) => {
      console.log("Request");
      // <SmallDialog />;
      // console.log(error);
      // handleClose();
      // errorDialog(true);
      setSmallDialogState(true);
      // return false;
      // return error;
      // setResponseData([]);
    });
}
