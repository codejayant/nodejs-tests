const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'jayant',
      age: 29
    },
    {
      name: 'maximus',
      age: 35
    },
    {
      name: 'black widow',
      age: 30
    }]);
});

app.listen(3000);

// export app to be used by test
module.exports.app = app;