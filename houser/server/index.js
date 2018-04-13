require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

app.get('/api/houses', (req, res) => {
  const db = req.app.get('db');
  db.getInventory().then((inventory) => {
    res
      .status(200)
      .send(inventory)
      .end();
  });
});

app.post('/api/house', (req, res) => {
  const db = req.app.get('db');
  const { body } = req;

  db.addToInventory(body).then((inventory) => {
    res
      .status(200)
      .send(inventory)
      .end();
  });
});

app.delete('/api/houses/:id', (req, res) => {
  const db = req.app.get('db');
  const { params } = req;
  console.log(params);

  db.removeFromInventory(params).then((inventory) => {
    res
      .status(200)
      .send(inventory)
      .end();
  });
});

const port = 4000;
massive(process.env.CONNECTION_URI).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(port, () => console.log(`Listening on port: ${port}`));
});
