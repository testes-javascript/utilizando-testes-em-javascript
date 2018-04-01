let array = [
  { product: 'Coca-Cola', price: 4.48 },
  { product: 'Fanta', price: 4.0 },
  { product: 'Fanta Uva', price: 4.1 }
];

let totalPriceProducts = array.reduce((valuesProducts, elem) => {
  return valuesProducts + elem.price;
}, 0);

console.log(totalPriceProducts);
