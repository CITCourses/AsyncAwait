'use strict';

const fs = require('fs');
const promisify = require('./promisify.js');
const readFile = promisify(fs.readFile);

readFile('filename', 'utf8')
  .then(
    data => console.log(data),
    error => console.log(error.message)
  );
