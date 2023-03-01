const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
const { NewError } = require("./models/error-schema");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/food-appAngular?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);
const foodRouter = require("./routes/food-route");
const userRouter = require("./routes/user-route");
// const userRouter = require("./routes/user-route");

const cors = require("cors");
// const { NewError } = require("./models/error-schema");

app.use(cors());
app.use("/uploads/images", express.static(__dirname + "/uploads/images"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/food", foodRouter);
app.use("/api/auth", userRouter);

//this is the last, going here if didnt find any path
app.use((req, res, next) => {
  console.log("error1");

  error = new NewError("not able to find page");
  error.errorCode = 404;
  next(error);
});

// going here only when activating next with error
app.use(function (error, req, res, next) {
  //console.log(error);
  console.log("error2");

  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  res.status(errorCode);
  res.json({ status: "fail", message: error.message });
});
