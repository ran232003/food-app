const mongoose = require("mongoose");

userSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
});
userSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id.toString();
  delete obj._id;
  delete obj.__v;

  return obj;
});
const User = mongoose.model("User", userSchema);
module.exports = User;
