const express = require("express");
const router = express.Router();

const products = require("./products");

router.get("/products/:id", (request, response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return response.status(404).json({
      message: "Product not found",
    });
  }

  response.json(product);
});

module.exports = router;
