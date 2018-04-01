let array = [
  { product: 'Coca-Cola', price: 5.48 },
  { product: 'Fanta', price: 5.0 },
  { product: 'Fanta Uva', price: 4.1 },
  { product: 'Água mineral', price: 2.0 },
  { product: 'Macarrão Talharim', price: 4.0 },
  { product: 'Açucar Refinado', price: 3.99 }
];

let totalPriceProducts = array
  .filter(product => product.price <= 4)
  .reduce((valuesProducts, elem) => {
    return valuesProducts + elem.price;
  }, 0);

console.log(totalPriceProducts);
