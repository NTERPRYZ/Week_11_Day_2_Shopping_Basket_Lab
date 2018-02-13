const shopping_basket = function(){
  this.items = [];
}

shopping_basket.prototype.addItem = function(item){
  this.items.push(item);
}


module.exports = shopping_basket;
