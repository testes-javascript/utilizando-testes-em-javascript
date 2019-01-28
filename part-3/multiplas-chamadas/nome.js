const getName = name => {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string') {
      resolve({ name: name });
    }
    reject('Parameter is not of type string');
  });
};

getName('Michael')
  .then(result => console.log(result))
  .catch(error => console.log(error));

getName()
  .then(result => console.log(result))
  .catch(error => console.log(error));
