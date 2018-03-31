let array = ['Michael', 'Douglas', 'Barbosa', 'Araujo'];

array.map(nome => {
  let nomes = `
        <p>${nome}</p>
    `;

  console.log(nomes);
});
