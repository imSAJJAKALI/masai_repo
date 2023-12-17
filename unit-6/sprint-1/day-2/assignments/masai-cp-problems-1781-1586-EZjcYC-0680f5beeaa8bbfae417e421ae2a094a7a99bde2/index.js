const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case "read": {
    fs.readFile(file, (err, data) => {
      if (err) console.log("Error reading the file", err);
      else console.log("File content:", data.toString());
    });
    break;
  }

  case "delete": {
    fs.unlink(file, (err) => {
      if (err) console.log("Error deleting the file", err);
      else console.log("File deleted");
    });
    break;
  }

  case "create": {
    fs.writeFile(file, content.toString(), (err) => {
      if (err) console.log("Error creating the file", err);
      else console.log("File created");
    });
    break;
  }

  case "append": {
    fs.appendFile(file, content, (err) => {
      if (err) console.log("Error appending to the file", err);
      else console.log("Content appended to the file");
    });
    break;
  }

  case "rename": {
    const newPath = path.join(path.dirname(file), content);
    fs.rename(file, newPath, (err) => {
      if (err) console.log("Error renaming the file", err);
      else console.log("File renamed");
    });
    break;
  }

  case "list": {
    fs.readdir(file, (err, files) => {
      if (err) console.log("Error listing the files", err);
      else console.log("Files in the directory:", files.join(", "));
    });
    break;
  }

  default:
    console.log(`Invalid operation '${operation}'`);
}
