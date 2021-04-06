import Request from "./../Request";

export default {
  getEmployees: (setResponseData) => {
    Request("GET", "employee", setResponseData);
  },
  addNewEmployee: (jsonData, handleClose, setSmallDialogState) => {
    Request("POST", "employee", jsonData, handleClose, setSmallDialogState);
  },
};
