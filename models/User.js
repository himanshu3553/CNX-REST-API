const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);

module.exports.createUser = async (userData) => {
  let user = {
    name: userData.name,
    age: userData.age,
    description: userData.description,
    city: userData.city,
    country: userData.country,
  };
  let res = await User.create(user);
  return "User created successfully.";
};
