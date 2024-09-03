const fs = require('fs');

const filename = 'example.txt';
const content = 'Hello, World!';

fs.writeFile(filename, content, (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log(`File written successfully: ${filename}`);
  }
});