const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db = low(adapter);

const Item = {};

Item.getAll = (callback) => {
  const items = db.get('items').value();
  callback(items);
}

module.exports = Item;