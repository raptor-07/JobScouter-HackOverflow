//json -> csv
const { Parser } = require("json2csv");

function format(data) {
  const fields = ["title", "company", "location", "description"];
  const json2csvParser = new Parser({ fields });
  return json2csvParser.parse(data);
}

module.exports = format;
