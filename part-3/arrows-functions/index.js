getName = (name = '') => 'Olá: ' + name;
getLastName = (lastName = '') => lastName;

let NameOfUser = `${getName('Michael')} ${getLastName('Araujo')}`;

console.log(getName('Michael'));
console.log(getName(''));
console.log(NameOfUser);

let NameAndLastName = {
  name: 'Michael',
  lastName: 'Araujo',

  concatName: function () {
    return `Olá: ${this.name} ${this.lastName}`;
  },

  showName: function () {
    const that = this;
    setTimeout(function () {
      console.log(that.concatName());
    }, 100);
  }
};

NameAndLastName.showName();

let NameAndLastNameArrow = {
  name: 'Michael',
  lastName: 'Araujo',

  concatName: function () {
    return `Olá: ${this.name} ${this.lastName}`;
  },

  showName: function () {
    setTimeout(() => {
      console.log(this.concatName());
    }, 100);
  }
};

NameAndLastNameArrow.showName();
