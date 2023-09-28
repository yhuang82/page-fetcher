const request = require("request");
const fs = require("fs");
const { resolve } = require("path");

const [url, filePath] = process.argv.slice(2);

request(url, (error, response, body) => {
  if (error) {
    console.log("Error downloading the file:", error);
    return;
  }
  fs.writeFile(resolve(filePath), body, (err) => {
    if (err) {
      console.error("Error saving the file:", err);
      return;
    }
    const fileSize = body.length;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`);
  });
});
