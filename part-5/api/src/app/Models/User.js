import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const userSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date,
});

// eslint-disable-next-line func-names
userSchema.pre('save', function(next) {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();
});

export default Mongoose.model('users', userSchema);
