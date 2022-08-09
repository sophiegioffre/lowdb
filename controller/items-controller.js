const Item = require('../model/item');

const getAllItems = (req, res) => {
  Item.getAll((results) => {
    if (!results) {
      res.send('Error retrieving all items');
    }
    res.send(results);
  })
}

module.exports = getAllItems;