const assert = require("assert")
const ShoppingBasket = require ("../shopping_basket.js")

describe ("basket", function(){
  let basket;
  beforeEach(function(){
    basket = new ShoppingBasket();
  });

  it("should start of empty", function(){
    assert.deepStrictEqual(basket.items, []);
  });

});
