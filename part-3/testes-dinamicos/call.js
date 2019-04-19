// PRIMEIRO EXEMPLO

function Product (name) {
  this.name = name;

  return this;
}

function Food (name) {
  Product.call(this, name);
  this.category = 'food';
}

Food.prototype = Object.create(Product.prototype);

let cheese = new Food('feta');
let soda = new Food('Coca Cola');

// SEGUNDO EXEMPLO

const person = {
  fullName: function () {
    return `Olá: ${this.firstName} ${this.lastName}`;
  }
};
let person1 = {
  firstName: 'Michael',
  lastName: 'Araujo'
};
let person2 = {
  firstName: 'Levina',
  lastName: 'Passos'
};

let fullName = person.fullName.call(person2);

console.log(fullName);
console.log(cheese);
console.log(soda);
