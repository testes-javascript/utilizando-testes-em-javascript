let assert = require('chai').assert;

function Product (name) {
  this.name = name;

  return this;
}

function Food (name) {
  Product.call(this, name);
  this.category = 'food';
}

function Toy (name) {
  Product.call(this, name);
  this.category = 'toy';
}

Toy.prototype = Object.create(Product.prototype);
Food.prototype = Object.create(Product.prototype);

describe('Product', () => {
  it('Objeto Comida', () => {
    let cheese = new Food('feta');
    assert.equal(cheese.name, 'feta');
    assert.equal(cheese.category, 'food');
  });
  it('Objeto Comida', () => {
    let soda = new Food('Coca Cola');
    assert.equal(soda.name, 'Coca Cola');
    assert.equal(soda.category, 'food');
  });
  it('Objeto Toy', () => {
    let toy = new Toy('robot');
    assert.equal(toy.name, 'robot');
    assert.equal(toy.category, 'toy');
  });
});
