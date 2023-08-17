const express = require('express');
const router = express.Router();

/* GET HOME PAGE */

router.get("/", (req, res, next) => {
  res.render("index",{currentUser: req.session.currentUser});
});

module.exports = router;
