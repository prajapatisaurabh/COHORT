function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function (item) {
  this.items.push(item);
};

ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((a, b) => a + b);
};
