//create file and write
const fs = require("fs");

function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (error) => {
      if (error) reject(error);
      console.log(`Data written to ${filename}`);
      resolve();
    });
  });
}

module.exports = writeFile;
