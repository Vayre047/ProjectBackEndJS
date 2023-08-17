const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default - 10 rounds)
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

/* SIGNUP */

// GET route that displays a form for new users to signup
router.get("/signup", isLoggedOut, (req, res) => {
  res.render("auth/signup", { currentUser: req.session.currentUser });
});

// POST route to submit the data of the form
router.post("/signup", async (req, res, next) => {
  try {
    // let username --> variable declaration
    // username = "bonjovi" --> variable initialization
    // const keywords --> variable declaration + initialization
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.render("auth/signup.hbs", {
        errorMessage: "All fields are mandatory to be filled to signup",
      });
      return;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
      res
        .status(500)
        .render("auth/signup.hbs", {
          errorMessage:
            "Password needs at least 6 characters and must have, at least, 1 uppercase letter",
        });
    }

    // generate the salt (extra data to password), in 10 saltRounds
    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(password, salt);

    let newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    req.session.currentUser = newUser;
    res.redirect("/countries");
  } catch (error) {
    // If the error that was catched is a Mongoose Validation Error ...
    if (error instanceof mongoose.Error.ValidationError) {
      res
        .status(500)
        .render("auth/signup.hbs", { errorMessage: error.message });
    } else if (error.code === 11000) {
      res.status(500).render("auth/signup.hbs", {
        errorMessage: "User not found and/or incorrect password",
      });
    } else {
      next(error);
    }
  }
});

/* LOGIN */

// GET Route to display a Login Form
router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login.hbs", { currentUser: req.session.currentUser });
});

// POST Route to submit the info of the Login Form
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (email === "" || password === "") {
      res.status(400).render("auth/login.hbs", {
        errorMessage: "Please enter both, email and password",
      });
      return;
    }

    // find a User that has the same email that was prompted
    let foundUser = await User.findOne({ email });
    if (!foundUser) {
      res
        .status(500)
        .render("auth/login.hbs", { errorMessage: "User not found" });
    } else if (bcrypt.compareSync(password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.redirect("/countries");
    } else {
      res
        .status(500)
        .render("auth/login.hbs", { errorMessage: "Incorrect password" });
    }
  } catch (error) {}
});

/* LOGOUT */
router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    }
    res.redirect("/");
  });
});

/* User Profile */

router.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.session.currentUser);
  res.render("auth/user-profile.hbs", {
    currentUser: req.session.currentUser,
  });
});

module.exports = router;
