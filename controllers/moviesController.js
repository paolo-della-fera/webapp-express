const connection = require('../data/db');

const index = (req, res) => {
  connection.query('SELECT * FROM movies', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ movies: results });
  });
};

module.exports = { index };