import mongoose = require('mongoose');

interface UserModel extends mongoose.Document {
  name: string;
  age: number;
  address: string;
}

export = UserModel;