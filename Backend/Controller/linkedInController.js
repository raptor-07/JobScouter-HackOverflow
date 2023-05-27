//call rrapid api
//store data

const getData = require("../Model/getData");

async function linkedinController(req, res) {
  try {
    // console.log("linkedinController called");
    const searchTerm = req.body.searchTerm;
    // console.log("searchTerm: ", searchTerm);

    const data = await getData(searchTerm);
    // console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = linkedinController;
