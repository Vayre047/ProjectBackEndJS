//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
//const User = require("../models/User.model.js");

//GET route to display all the countries in the database
router.get("/countries", async (req, res) => {
  try {
    // get all countries from our Database via .find() method
    let allCountriesFromDB = await Country.find();

    res.render("countries/countries-list.hbs", { countries: allCountriesFromDB });

  } catch (error) {
    console.log("Error while getting countries", error);
  }
});



router.get("/countries/:countryId", async (req, res) => {
  try {
   
    const { countryId } = req.params;

    //Find Country via its Id's inside the Database
    let foundCountry = await Country.findById(countryId)

    await foundCountry.populate('cities');

    res.render("countries/countries-details.hbs", { country: foundCountry});

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;