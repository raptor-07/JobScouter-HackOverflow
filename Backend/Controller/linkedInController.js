const fs = require("fs");
const ogdata = fs.readFile("../order.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
});
//call rrapid api
//store data
const pyScript = require("../pyScript");
const getData = require("../Model/getData");

async function linkedinController(req, res) {
  try {
    // console.log("linkedinController called");
    console.log(req.body);
    const description = req.body.description;
    // console.log("searchTerm: ", searchTerm);

    console.log(req.body.pdfFile);
    const data = await getData(description);

    console.log(data);

    const filePath = "./data.json";

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`JSON data saved to ${filePath}`);
    });
    res.status(200).send(
      JSON.stringify({
        message: "Data saved to data.json",
        data: ogdata,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = linkedinController;
