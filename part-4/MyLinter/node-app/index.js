async function myFunctionAsync () {
  return 'Teste';
}

async function myTest () {
  let tips = [
    "Click on any AST node with a '+' to expand it",

    'Hovering over a node highlights the \
     corresponding part in the source code',

    'Shift click on an AST node expands the whole substree'
  ];

  tips.forEach((tip, i) => console.log(`Tip ${i}` + tip));
}

const testeAsync = async value => {};
