const express = require('express');
const app = express();
const moviesRouter = require('./routers/movieRouter');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

require('./data/db');


// Middleware per il parsing del JSON
app.use(express.json());



// Avvio del server
app.listen(3000, () => {
  console.log('Server avviato su http://localhost:3000');
});


// routes
app.use('/movies', moviesRouter);


// Middleware per gestire endpoint non trovati
app.use(notFound);
app.use(errorHandler);