//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
//const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/cities", isLoggedIn, async (req, res) => {
  try {
    const allCitiesFromDB = await City.find();
    res.render("cities/cities-list.hbs", { cities: allCitiesFromDB, currentUser: req.session.currentUser});
  } catch (error) {
    console.log("Error while getting cities", error);
  }
});

router.get("/cities/:cityId", isLoggedIn, async (req, res, next) => {
  const { cityId } = req.params;
  try {
    // Populate cities with Touristic Points
    let foundCity = await City.findById(cityId);

    //Populate touristic points with reviews
    await foundCity.populate({
      path: "touristicPoints",
      populate: {
        path: "reviews",
        populate: {
          path: "author",
          model: "User",
        },
      },
    });
    console.log(foundCity)
    res.render("cities/cities-details.hbs", { city: foundCity, currentUser: req.session.currentUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
