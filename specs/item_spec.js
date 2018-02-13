const assert = require ("assert")
const Item = require ("../item.js")

describe("Item", function(){
  it("should have a name", function(){
    const shoe = new Item("Trainer");
    assert.strictEqual(shoe.name, "Trainer")
  });
});
