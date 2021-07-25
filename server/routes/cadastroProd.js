const express = require('express');
const router = express.Router();
const Product = require("../connection/schema/Product");

router.get("/", async (req, res) => {
    const dados = await Product.find({})
    res.send(await dados)
});


router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send({ product });
  } catch (err) {
    return res.status(400).send({ error: `Registro falhou ${err}` });
  }
});

module.exports = router;
