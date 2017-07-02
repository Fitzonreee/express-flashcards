const express = require('express');
const router = express.Router();

const cardData = {
  prompt: "Who is Luke's father?",
  hint: "It ryhmes with Garth Day-der"
}

router.get('/', (req, res) => {
  res.render('card', cardData)
});

module.exports = router;
