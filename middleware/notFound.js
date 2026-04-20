// middlewares/notFound.js
const notFound = (req, res) => {
  res.status(404).json({ error: 'Endpoint non trovato' });
};

module.exports = notFound;