const vending = require('./vending');

//Test() is a function provided by Jest. It takes 2 arguments.
//1. description of what's being tested
//2. the function to run to actually confirm whether it works

test('i get all items when i run getAllItems()', function () {
	return vending.getAllItems().then(function (items) {
		expect(items.length).toBe(1); //the actual test
	});
});

test('i can add an item', function () {//this actually puts crackers into the db
	return vending.addItem('Lays').then(function (newItem) {
		expect(newItem.description).toBe('Crackers');
		expect(newItem.cost).toBe(1);
		expect(newItem.quantity).toBe(5);
		expect(newItem.name).toBe('Lays');
	});
});

test('i can add and delete an item', function () {
	let startingItems;
	//at the beginning we have a length of x
	//add an item, length is x+1
	//delete an item, length is x
	return vending.getAllItems().then(function (items) {
		startingItems = items.length;

		vending.addItem('Water').then(function (newItem) {
			vending.getAllItems().then(function (items) {
				//there should now be one more item than before
				expect(items.length).toBe(startingItems + 1);

				//delete an item, length is x
				vending.begoneItem(newItem.id).then(function () {
					vending.getAllItems().then(function (items) {
						expect(items.length).toBe(startingItems);
					})
				});
			});
		});
	})
});

