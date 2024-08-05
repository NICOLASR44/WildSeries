const tables = require("../../database/tables");

const categories = [
  { id: 1, name: "Science-Fiction" },
  { id: 2, name: "Comédie" },
];

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.status(404).send(`Category with id ${req.params.id} not found.`);
  }
};

module.exports = { browse, read };
