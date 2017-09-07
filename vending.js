//This file - any time we are messing with vending machine, that code should live here.
//Any sort of db interactions should go here//

const Sequelize = require('sequelize');
const bodyparser = require('body-parser');

/******** CREATE DB ********/
const db = new Sequelize ('vendingJest', 'savannahlowder', '', {
  dialect: 'postgres',//npm install pg
});
//run create db in terminal

/******** ITEM SCHEMA ********/
const Item = db.define('item', {
    name: Sequelize.STRING(10),
    description: Sequelize.STRING(20),
    cost: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
});

//Sync schema
// Item.sync();
Item.sync().then(function () {
    console.log('item syncd');

    // Item.create ({
    //   name: 'Extra',
    //   description: 'Gum',
    //   cost: 1,
    //   quantity: 10,
    // });
});

function getAllItems() {
  return Item.findAll();
}

function addItem(name) {
  return Item.create({
    name: name,
    description: 'Crackers',
    cost: 1,
    quantity: 5,
  });
}

function begoneItem(id) {
  return Item.destroy({
    id: id,
  });
}

/******** PURCHASES SCHEMA ********/
const Purchases = db.define('purchases', {
  name: Sequelize.STRING(10),
  cost: Sequelize.INTEGER,
})

//Sync schema
Purchases.sync().then(function () {
  console.log('purchases syncd');
});

module.exports = {
  getAllItems: getAllItems,
  addItem: addItem,
  begoneItem: begoneItem,
};