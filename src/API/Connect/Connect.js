import axios from "axios";

export default {
  getData: (method, url, data) =>
    axios({
      method: method,
      // url: "http://127.0.0.1:5001/" + url,
      // url: "http://localhost:5001/" + url,
      url: "http://192.168.0.101:5001/" + url,
      data: data,
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "localhost:5001",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      },
    }),
};
