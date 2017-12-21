'use strict';

const fs = require('fs');
const promisify = require('./promisify.js');
const readFile = promisify(fs.readFile);

(async () => {
  try {
    console.log(await readFile('file1.txt', 'utf8'));
    console.log(await readFile('file2.txt', 'utf8'));
    console.log(await readFile('file3.txt', 'utf8'));
    console.log(await readFile('file4.txt', 'utf8'));
  } catch (err) {
    console.log(err.message);
  }
})();
