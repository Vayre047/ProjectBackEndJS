//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");

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
    //ES& Object Destructuring with bookId route param
    const { countryId } = req.params;

    //Find Book via its Ids inside the Database
    let foundCountry = await Country.findById(countryId)


    // If we had only this first populate we would have only a list of reviews and authors
    await foundCountry.populate('cities'); // just an indication to populate

    res.render("countries/countries-details.hbs", { country: foundCountry});

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;