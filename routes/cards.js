const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// route is /cards
router.get('/', (req, res) => {
  const numOfCards = cards.length;
  const randomCard = Math.floor( Math.random() * numOfCards );
  res.redirect(`/cards/${randomCard}?side=question`)
});

// routes is /cards/id
router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];

  const templateData = { id, text };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }

  console.log(req.query);

  res.render('card', templateData);

});

module.exports = router;
