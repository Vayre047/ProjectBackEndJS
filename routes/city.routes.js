//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");

router.get('/cities', async (req, res, next) => {
  try {
    const allCitiesFromDB = await City.find();
    res.render('cities/cities-list', { cities: allCitiesFromDB });

  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/cities/:countryId', async (req, res, next) => {
  const {countryId} = req.params;
  try {
    const selectedCity = await City.findById(cityId);
    res.render('cities/cities-details', selectedCity);
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});



module.exports = router;