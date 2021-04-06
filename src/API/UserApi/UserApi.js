import Request from "./../Request";

export default {
  getUsers: (setResponseData) => {
    Request("GET", "user", setResponseData);
  },
  addNewUser: (jsonData, handleClose, setSmallDialogState) => {
    Request("POST", "user", jsonData, handleClose, setSmallDialogState);
  },
};
