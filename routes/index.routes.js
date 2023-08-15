const express = require('express');
const router = express.Router();

/* GET home page */


router.get("/", (req, res, next) => {
  console.log("current user is: ",req.session.currentUser);
  let {currentUser} = req.session;
  res.render("index",{currentUser});
});

module.exports = router;
