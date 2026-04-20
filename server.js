const express = require('express');
const app = express();
const moviesRouter = require('./routers/movieRouter');

require('./data/db');


// Middleware per il parsing del JSON
app.use(express.json());


// Avvio del server
app.listen(3000, () => {
  console.log('Server avviato su http://localhost:3000');
});


// routes
app.use('/movies', moviesRouter);