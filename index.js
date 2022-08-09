const express = require('express');
const app = express();
const port = 8000;
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);
const itemsRouter = require('./routes/items-routes');

app.use(express.json());

app.use('/items', itemsRouter);

db.defaults({ items: [] })
  .write()

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});