const express = require('express');
const app = express();
const port = 8000;
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);

app.use(express.json());

db.defaults({ items: [] })
  .write()

//GET request to display results
app.get('/items', (req, res) => {
  const results = db.get('items').value();
  res.send(results);
})

//POST request to create new item
app.post('/items', (req, res) => {
  const item = req.body;
  db.get('items').push({ id: db.get('items').value().length + 1, ...item }).write();
  res.send(item);
})

//PUT request to update specified item
app.put('/items/:id', (req, res) => {
  const id = +req.params.id;
  const item = req.body;

  db.get('items').find({ id: id }).assign({ ...item }).write();
  res.send(`Updated item with id of ${id}`);
})

//DELETE request to delete specified item
app.delete('/items/:id', (req, res) => {
  const id = +req.params.id;

  db.get('items').remove({ id: id }).write();
  res.send(`Deleted item with id of ${id}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});