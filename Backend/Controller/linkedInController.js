//call rrapid api
//store data

const getData = require("./getdata");
const format = require("./format");
const writeFile = require("./filewrite");

async function linkedinController(req, res) {
  try {
    const jobData = await getData();
    const csvString = format(jobData);
    await writeFile("job-data.csv", csvString);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=job-data.csv");
    res.send(csvString);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = linkedinController;
