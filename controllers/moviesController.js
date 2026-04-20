const connection = require('../data/db');


// Index
const index = (req, res) => {
  connection.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ movies: results });
  });
};


// Show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  const movieQuery = 'SELECT * FROM movies WHERE id = ?';
  const reviewsQuery = 'SELECT * FROM reviews WHERE movie_id = ?';

  connection.query(movieQuery, [id], (err, movieResults) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (movieResults.length === 0) {
      return res.status(404).json({ error: 'Film non trovato' });
    }

    connection.query(reviewsQuery, [id], (err, reviewsResults) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const film = {
        ...movieResults[0],
        reviews: reviewsResults
      };

      res.json({ film });
    });
  });
};

module.exports = { index, show };