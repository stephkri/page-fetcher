const args = process.argv;
const url = args[2];
const file = args[3];
// this all works

const request = require("request");
const fs = require("fs");
let infoFromSite = "";

request(url, (error, response, body) => {
  infoFromSite = infoFromSite.concat(body);
  if (error === null) {
    fs.writeFile(file, infoFromSite, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Downloaded and saved ${infoFromSite.length} bytes to ${file}`);
      }
    });
  } else {
    console.log("Application failed");
    console.log(error);
  }
});