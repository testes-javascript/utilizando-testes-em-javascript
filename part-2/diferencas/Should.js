const chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

const db = {
  get (param, callback) {
    if (!param) {
      callback(`{ param } is not defined`, null);
    }

    const object = {
      id: param,
      name: 'Peter Quill',
      email: 'peterquill@guardiansofthegalaxy.com'
    };
    callback(null, object);
  }
};

db.get(1, (err, result) => {
  should.not.exist(err);

  should.exist(result);

  result.should.be.an('object');

  result.should.be.an('object').exist(result);
});
