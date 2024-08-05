const categories = [
  { id: 1, name: "Science-Fiction" },
  { id: 2, name: "Comédie" },
];

const browse = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.q)
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
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
