let array = [
  'Michael',
  'Douglas',
  'Barbosa',
  'Araujo',
  'Michael',
  'Douglas',
  'Barbosa',
  'Araujo'
];
let nomeMaisculo = [];
for (let i = 0; i < array.length; i++) {
  if (array.indexOf(array[i]) === i) {
    nomeMaisculo.push(array[i].toUpperCase());
  }
}

console.log(nomeMaisculo);
