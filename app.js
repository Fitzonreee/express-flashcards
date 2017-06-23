const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/hello', (req, res) => {
  res.send(Date.now)
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
