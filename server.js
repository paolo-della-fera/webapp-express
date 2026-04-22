const express = require('express');
const app = express();
const moviesRouter = require('./routers/movieRouter');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

// Abilita CORS per tutte le rotte
app.use(cors());

require('./data/db');


// Middleware per il parsing del JSON
app.use(express.json());
// Middleware per servire file statici
app.use(express.static('public'));


// Avvio del server
app.listen(3010, () => {
  console.log('Server avviato su http://localhost:3010');
});


// routes
app.use('/movies', moviesRouter);


// Middleware per gestire endpoint non trovati
app.use(notFound);
app.use(errorHandler);