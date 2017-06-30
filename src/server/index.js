'use strict';

const path = require('path');
const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 8080;
const STATIC_PATH = path.join(__dirname, '../..', 'public');

const app = connect();

app.use('/api/messages', function _fetchMessages(req, res) {
  // Return 10 dummy messages
  let messages = Array(10).fill(0).map(() => {
    return generateRandomMessage();
  });

  let json = {
    messages
  };

  res.end(JSON.stringify(json));
});

app.use(serveStatic(STATIC_PATH)).listen(PORT, function() {
  console.log('\n\t↣ Node.js server running on http://localhost:8080 ...');
  console.log('\t↣ STATIC_PATH =', STATIC_PATH);
  console.log('\n');
});









function generateRandomMessage() {
  let words = [
    'amazing',
    'awesome',
    'cool',
    'fantastic',
    'great',
    'like none other'
  ];
  let randomNumber = generateRandomNumber(0, words.length-1);
  let randomWord = words[randomNumber];

  return 'Techlahoma is ' + randomWord;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
