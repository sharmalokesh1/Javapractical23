const fs = require('fs');

const htmlFilePath = 'lokeshcv.html';

fs.readFile(htmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the HTML file:', err);
    return;
  }

  console.log(' content:\n', data);
});
