const express = require('express');
const router = express.Router();
const User = require('../schema/User')

router.get("/", async(req, res) => {
    const user = await User.find({})
    res.status(200).send(await user)
})

router.post("/", async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).send({ user });
    } catch (err) {
      return res.status(400).send({ error: `Registro falhou ${err}` });
    }
  });



module.exports = router