import Request from "./../Request";

export default {
  getEmployees: (setResponseData) => {
    Request("GET", "employee", setResponseData);
  },
  addNewEmployee: (jsonData) => {
    Request("POST", "employee", jsonData);
  },
};
