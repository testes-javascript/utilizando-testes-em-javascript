async function myFunctionAsync() {
  return 'Teste';
}

myFunctionAsync();

async function myTestAsync() {
  const tips = [
    "Click on any AST node with a '+' to expand it",

    'Hovering over a node highlights the corresponding part in the source code',

    'Shift click on an AST node expands the whole substree',
  ];

  tips.forEach((tip, i) => console.log('Tip' + tip + i));
}

myTestAsync();

const testeAsync = async () => {};
testeAsync();
