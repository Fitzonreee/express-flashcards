const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cardData = {
  prompt: "Who is Luke's father?",
  hint: "It ryhmes with Garth Day-der"
}

app.use(bodyParser.urlencoded({extended:false}));

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

app.post('/hello', (req, res) => {
  // console.log(req.body);
  res.render('hello', { name: req.body.username });
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
