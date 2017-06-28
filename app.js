const express = require('express');
const app = express();

const cardData = {
  prompt: "Who is Luke's father?",
  hint: "It ryhmes with Garth Day-der"
}

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/cards', (req, res) => {
  res.render('card', cardData)
});

app.get('/hello', (req, res) => {
  res.render('hello')
});

app.post('/hello', (reg, res) => {
  // console.log("Submitted!");
  res.render('hello')
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
