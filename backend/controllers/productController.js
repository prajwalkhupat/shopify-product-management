const shopifyApi = require("../utils/shopifyApi");

exports.getAllProducts = async (req, res) => {
  try {
    const response = await shopifyApi.get("/products.json");
    res.json(response.data.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const response = await shopifyApi.post("/products.json", { product });
    res.status(201).json(response.data.product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;
    const response = await shopifyApi.put(`/products/${id}.json`, { product });
    res.json(response.data.product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await shopifyApi.delete(`/products/${id}.json`);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
