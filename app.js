const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

const cardData = {
  prompt: "Who is Luke's father?",
  hint: "It ryhmes with Garth Day-der"
}

app.get('/cards', (req, res) => {
  res.render('card', cardData)
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
