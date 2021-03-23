import connect from "./../Connect";

export default function Request(method, url, setResponseData) {
  connect
    .getData(method, url, setResponseData)
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
      } else if (method === "POST") {
        if (response.data.success) {
          console.log(response.data.message);
          return true;
        }
      }
    })
    .catch((error) => {
      console.log(error);
      // return error;
      // setResponseData([]);
    });
}
