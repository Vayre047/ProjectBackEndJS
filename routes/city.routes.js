//Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js")

router.get('/cities', async (req, res) => {
  try {
    const allCitiesFromDB = await City.find();
    res.render('cities/cities-list.hbs', { cities: allCitiesFromDB });

  } catch (error) {
    console.log('Error while getting cities', error);
    
  }
});

router.get('/cities/:cityId', async (req, res, next) => {
  const {cityId} = req.params;
  try {
    const foundCity = await City.findById(cityId);
    res.render('cities/cities-details.hbs', {city: foundCity});
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/touristicPoint/create/:cityId", async (req, res) => {
  try {
    const { cityId } = req.params;
    const { name, description } = req.body;

    // Create new Touristic Point
    const newTouristicPoint = await TouristicPoint.create({ name, description });

    // Update the City with new Touristic Point that was created
    const cityUpdate = await City.findByIdAndUpdate(cityId, {
      $push: { touristicPoints: newTouristicPoint._id },
    });

    res.redirect(`/cities/${cityId}`);

  } catch (error) {
    
  }
});


module.exports = router;