const fs = require('fs');

const filePath = 'Sharma.txt'; 
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`File does not exist: ${filePath}`);
    return;
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting the file: ${err}`);
      return;
    }
    console.log(`File '${filePath}' has been deleted.`);
  });
});
