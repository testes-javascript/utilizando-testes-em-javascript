import { Pessoa } from './../Validacoes/Pessoa';

const assertsEquals = (value, equals) => {
  return value == equals;
};

const testNome = () => {
  console.log('***** Iniciando os testes *****');
  console.group();
  console.warn(
    '\x1b[31m',
    `Verificando se Michael é um nome inválido: ${assertsEquals(
      false,
      Pessoa.nome('Michael')
    )}`
  );
  console.group();
  console.warn(
    '\x1b[31m',
    `Verificando se Levina é um nome inválido: ${assertsEquals(
      false,
      Pessoa.nome('Levina')
    )}`
  );
  console.log(
    '\x1b[36m%s\x1b[0m',
    `Verificando se Michael Douglas é um nome válido: ${assertsEquals(
      true,
      Pessoa.nome('Michael Douglas')
    )}`
  );
  console.groupEnd();
  console.log(
    '\x1b[36m%s\x1b[0m',
    `Verificando se Levina Passos é um nome válido: ${assertsEquals(
      true,
      Pessoa.nome('Levina Passos')
    )}`
  );
  console.groupEnd();
  console.log('***** Finalizando os testes *****');
};

testNome();
