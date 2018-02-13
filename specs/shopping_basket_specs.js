const assert = require("assert")
const ShoppingBasket = require ("../shopping_basket.js")
const Item = require("../item.js")

describe ("basket", function(){
  let basket;
  let shoe;
  let baseballBat

  beforeEach(function(){
    basket  = new ShoppingBasket();
    shoe    = new Item("Trainer", 20, true);
    baseballBat = new Item("Nike", 10, false);
  });

  it("should start of empty", function(){
    assert.deepStrictEqual(basket.items, []);
  });

  it("should take in items", function(){
    basket.addItem(shoe);
    basket.addItem(baseballBat);
    assert.strictEqual(basket.items.length, 2)
  })
  it("should be able to remove items", function(){
    basket.addItem(shoe);
    basket.addItem(baseballBat);
    basket.removeItem(shoe);
    assert.strictEqual(basket.items.length, 1)
  })
});
