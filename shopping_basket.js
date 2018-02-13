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

shopping_basket.prototype.getTotalCost = function(){
  const originalValue = this.getValue();

  if(originalValue <= 20){
    return originalValue;
  }

  return originalValue * 0.9;
}

shopping_basket.prototype.getValue = function(){
  let totalValue = 0;

  for(item of this.items){
    totalValue += item.price
  }

  return totalValue;
}


module.exports = shopping_basket;
