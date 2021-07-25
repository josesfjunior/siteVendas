const express = require('express');
const router = express.Router();
const User = require('../connection/schema/User')

router.get("/", async(req, res) => {
    const user = await User.find({})
    res.status(200).send(await user)
})



module.exports = router