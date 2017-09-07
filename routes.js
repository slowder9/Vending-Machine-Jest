const vending = require('./vending');

function createRoutes(server) {
/******** CUSTOMERS ********/
//Get request for list of items
server.get('/api/customer/items', function (req, res) {

  });

//Post request for customer to purchase item
server.post('/api/customer/:productId/purchases', function (req, res) {

  });

/******** VENDORS ********/
//Get request for vendors to see list of purchases
server.get('/api/vendor/purchases', function (req, res) {

  });

//Get request for vendors to see how much money in the machine
server.get('/api/vendor/money', function (req, res) {

  });

//Post request for vendors to add new item
server.post('/api/vendor/items', function (req, res) {

  });
};

module.exports = createRoutes;

