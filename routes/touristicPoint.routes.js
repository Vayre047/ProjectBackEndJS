//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js");



//GET ROUTE to display info about specific city
router.get("/cities/:cityId", async (req, res) => {
  try {
    //ES& Object Destructuring with bookId route param
    const { cityId } = req.params;

    //Find Book via its Ids inside the Database
    let foundCity = await City.findById(cityId);

    // If we had only this first populate we would have only a list of reviews and authors
    await foundCity.populate("touristicPoints"); // just an indication to populate

    res.render("cities/cities-details.hbs", { city: foundCity });

  } catch (error) {
    console.log(error);
  }
});