import axios from "axios";

export default {
  getData: () =>
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/user",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "example.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        // "Access-Control-Request-Method": "GET",
        // "Access-Control-Request-Headers": "Content-Type, Authorization",
      },
    }),
};
