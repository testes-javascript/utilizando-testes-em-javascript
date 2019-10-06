import Mongoose from 'mongoose';

import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = Mongoose.connect(databaseConfig.connection, {
      useNewUrlParser: databaseConfig.useNewUrlParser,
    });
  }
}

export default new Database();
