const shopping_basket = function(){
  this.items = [];
}

shopping_basket.prototype.addItem = function(item){
  this.items.push(item);
}

shopping_basket.prototype.removeItem = function(item){
  const indexOfItem = this.items.indexOf(item)
  this.items.splice(indexOfItem, 1);
}


module.exports = shopping_basket;
