//call rrapid api
//store data
const pyScript = require("../pyScript");
const getData = require("../Model/getData");

async function linkedinController(req, res) {
  try {
    // console.log("linkedinController called");
    const description = req.body.description;
    // console.log("searchTerm: ", searchTerm);

    console.log(req.body.pdfFile);
    const data = await getData(description);
    pyScript.scriptCaller();

    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = linkedinController;
