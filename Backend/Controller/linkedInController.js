//call rrapid api
//store data

const getData = require("../Model/getData");
const writeFile = require("../Model/fileWrite");

async function linkedinController(req, res, next) {
  try {
    console.log('linkedinController called');
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = linkedinController;
