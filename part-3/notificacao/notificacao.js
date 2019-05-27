const notifier = require('node-notifier');

notifier.notify('Message');

notifier.notify({
  title: 'Utilizando testes em JavaScript',
  message: 'Olá, pessoal!'
});
