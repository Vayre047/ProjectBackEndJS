// //Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js");

router.get("/cities/:cityId/createTouristicPoint", async (req,res) => {
  try {
    const {cityId} = req.params;
    const foundCity = await City.findById(cityId);
    res.render('touristicPoints/touristicPoint-create.hbs', {city: foundCity})
  }
  catch (error) {
    console.log(error);
  }
});

router.post("/cities/:cityId/createTouristicPoint", async (req, res) => {
  try {
    const { cityId } = req.params;
    const { name, description } = req.body;

    // Create new Touristic Point
    const newTouristicPoint = await TouristicPoint.create({ name, description});

    // Update the City with new Touristic Point that was created
    const cityUpdate = await City.findByIdAndUpdate(cityId, {
      $push: { touristicPoints: newTouristicPoint._id },
    });

    res.redirect(`/cities/${cityId}#${newTouristicPoint._id}`);

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;