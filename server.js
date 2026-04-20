const express = require('express');
const app = express();

require('./data/db');

app.listen(3000, () => {
  console.log('Server avviato su http://localhost:3000');
});