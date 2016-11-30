var shopping_basket = require('../shopping_basket');
var assert = require('assert');
var item = require('../item');


describe('shopping basket', function(){
  it('can add items', function(){

    item1 = {
      description: "jumper",
      price: 12
    };

    item2 = {
      description: "goat",
      price: 10
    };

    shopping_basket.addItem(item1);
    shopping_basket.addItem(item2);
    assert.equal(2, shopping_basket.totalItems());
  });

  it('can have a total price', function(){
    shopping_basket.basketTotal();
    assert.equal(22, shopping_basket.total);
  });

  it('can remove items', function(){
    shopping_basket.removeItem(item2)
    assert.equal(1, shopping_basket.totalItems());
  });
  it('can check if a discount can be applied', function(){
    shopping_basket.addItem(item2);
    shopping_basket.basketTotal();
    shopping_basket.checkForDiscount();
    assert.equal(20, shopping_basket.total;
  })

})
