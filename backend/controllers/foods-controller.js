const User = require("../models/user-schema");
const express = require("express");
const bodyParser = require("body-parser");
const sample_foods = require("../data");
const Food = require("../models/food-schema");
const app = express();

app.use(bodyParser.json());
const setFoods = async (req, res, next) => {
  //"assets/food-6.jpg"
  sample_foods.map(async (food) => {
    food.imageUrl = food.imageUrl.replace(
      "assets",
      "http://localhost:5000/uploads/images"
    );
    console.log(food.imageUrl);
    let dbFood = new Food(food);
    try {
      let response = await dbFood.save();
    } catch (error) {
      console.log("error : ", error);
      return res.json({ status: "fail" });
    }
  });
  res.json({ status: "ok" });
};
const getFoods = async (req, res, next) => {
  try {
    let foodArray = await Food.find();

    let newArr = foodArray.map((food, index) => {
      return food.transform();
    });

    res.json({ foods: newArr });
  } catch (error) {
    res.json({ status: "fail" });
  }
};
module.exports = {
  getFoods: getFoods,
};
