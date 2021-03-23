import Request from "./../Request";

export default {
  getUsers: (setResponseData) => {
    Request("GET", "user", setResponseData);
  },
  addNewUser: (jsonData) => {
    Request("POST", "user", jsonData);
  },
};
