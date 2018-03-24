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

let Nomes = array
  .filter((elem, i, array) => {
    return array.indexOf(elem) === i;
  })
  .map(array => {
    return array.toUpperCase();
  });

console.log(Nomes);
