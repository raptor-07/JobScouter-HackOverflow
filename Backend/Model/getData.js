const axios = require("axios");

async function getData() {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: searchTerm,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "eebf81b82bmsh65f31753950f55bp133c48jsn1fee64e7ff75",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data); // Log the response data
    // return response.data;
    console.log("getData called", response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = getData;
