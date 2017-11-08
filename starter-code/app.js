'use strict';

const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const Chuck = require('chucknorris-io');
const client = new Chuck();

// ...


// ...

app.use(express.static('public'));
/* New */
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', (req, res, next) => {
  res.send('hello world');
});


app.get('/random', (req, res, next) => {
  // Retrieve a random chuck joke
  client.getRandomJoke()
    .then((joke) => {
      res.send(joke.value);
    }).catch((err) => {
      console.log('Oh oh!' + err);
    });
});


app.get('/categories', (req, res, next) => {
  // Retrieve a random chuck joke
  client.getJokeCategories()
    .then((response) => {
      const data = {
        response: response
      };
      res.render('categories', data);
    }).catch((err) => {
      console.log('Oh oh!' + err);
    });
});




app.listen(3000);
