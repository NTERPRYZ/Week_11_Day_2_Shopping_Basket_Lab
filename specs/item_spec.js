const assert = require ("assert")
const Item = require ("../item.js")

describe("Item", function(){

  let shoe;

  beforeEach(function(){
    shoe = new Item("Trainer", 20, true);
  });

  it("should have a name", function(){
    assert.strictEqual(shoe.name, "Trainer")
  });
  it("should have a price", function(){
    assert.strictEqual(shoe.price, 20)
  })
  it("should state if its BOGOF", function(){
    assert.strictEqual(shoe.isBogof, true);
  })
});
