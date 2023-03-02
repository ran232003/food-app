const User = require("../models/user-schema");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const NewError = require("../models/error-schema");
const app = express();
const nodemailer = require("nodemailer");
app.use(bodyParser.json());

const signup = async (req, res, next) => {
  console.log(req.body);
  let user = { ...req.body };
  try {
    //check if user exsist
    const checkUser = await User.findOne({ email: user.email });
    if (checkUser) {
      error = new NewError("user allready exist");
      error.errorCode = 400;
      return next(error);
      //return res.json({ status: "user exist" });
    }
    // user not exsist
    user.password = await bcrypt.hash(user.password, 12);
    console.log(user);
    let newUser = new User(user);

    await newUser.save();
    newUser = newUser.transform();
    console.log("after save");

    token = jwt.sign(
      { id: newUser.id.toString(), email: newUser.email },
      "my-secret",
      {
        expiresIn: "1d",
      }
    );
    let returnUser = {
      email: newUser.email,
      fullName: newUser.fullName,
      id: newUser.id,
      token,
    };
    console.log(returnUser);
    return res.json({
      status: "ok",
      message: "Sign In Completed",
      user: returnUser,
    });
  } catch (error) {
    console.log(error);
    let err = new NewError("Somthing Went Wrong, Try Again");
    return next(err);
  }
};
const login = async (req, res, next) => {
  let user = { ...req.body };
  try {
    let checkUser = await User.findOne({ email: user.email });
    console.log(checkUser, "checkUser");
    if (checkUser) {
      //user exsist, find him and send to user
      let passwordCheck = await bcrypt.compare(
        user.password,
        checkUser.password
      ); //To check a password: true or false
      console.log(passwordCheck, "passwordCheck");
      if (!passwordCheck) {
        let err = new NewError("wrong password");
        return next(err);
      }
      //generate new token
      checkUser = checkUser.transform();
      token = jwt.sign(
        { id: checkUser.id.toString(), email: checkUser.email },
        "my-secret",
        {
          expiresIn: "1d",
        }
      );
      let returnUser = {
        email: checkUser.email,
        fullName: checkUser.fullName,
        id: checkUser.id,
        token,
      }; //
      return res.json({ message: "Login Success", user: returnUser });
    } else {
      let err = new NewError("User Dont Exist");
      return next(err);
    }
  } catch (error) {
    console.log("error", error);
    let err = new NewError("Somthing Went Wrong, Try Again");
    return next(err);
  }
  return res.json({
    status: "fail",
    message: "Somthing Went Wrong, Try Again",
  });
};
const sendMail = async (req, res, next) => {
  let { email } = req.body;
  console.log(email);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mike232003@gmail.com",
      pass: "qlgzaytopwblyjyl",
    },
  });
  //google pass: qlgzaytopwblyjyl
  // send mail with defined transport object
  let user = getDbUser();
  let info = await transporter.sendMail({
    from: "mike232003@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  return res.json({ message: "Login Success" });
};
module.exports = {
  signup: signup,
  login: login,
  sendMail: sendMail,
};
