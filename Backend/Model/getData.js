//fetch data from Api
const axios = require("axios");

async function getData() {
  const options = {
    method: "POST",
    url: "https://linkedin-jobs-search.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "eebf81b82bmsh65f31753950f55bp133c48jsn1fee64e7ff75",
      "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
    },
    data: {
      search_terms: "python programmer",
      location: "Chicago, IL",
      page: "1",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getData;
