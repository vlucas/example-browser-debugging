'use strict';

const path = require('path');
const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 8080;
const STATIC_PATH = path.join(__dirname, '../..', 'public');

connect().use(serveStatic(STATIC_PATH)).listen(PORT, function() {
  console.log('\n\t↣ Node.js server running on http://localhost:8080 ...');
  console.log('\t↣ STATIC_PATH =', STATIC_PATH);
  console.log('\n');
});
