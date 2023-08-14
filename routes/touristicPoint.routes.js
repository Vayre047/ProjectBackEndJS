//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js");



//GET ROUTE to display info about specific city
router.get("/cities/:cityId", async (req, res) => {
  try {
  
    const { cityId } = req.params;

   
    let foundCity = await City.findById(cityId);

  
    await foundCity.populate("touristicPoints"); 

    res.render("cities/cities-details.hbs", { city: foundCity });

  } catch (error) {
    console.log(error);
  }
});