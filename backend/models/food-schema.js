const mongoose = require("mongoose");

foodSchema = mongoose.Schema({
  name: String,
  price: Number,
  cookTime: String,
  favorite: Boolean,
  origins: [],
  stars: Number,
  tags: [],
  imageUrl: String,
});
//getting rid of _id and __v
foodSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;

  return obj;
});
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
