// //Express Tool that helpps us to create Toutes outside app.js
const router = require("express").Router();

const Country = require("../models/Country.model.js");
const City = require("../models/City.model.js");
//const User = require("../models/User.model.js");
const TouristicPoint = require("../models/TouristicPoint.model.js");

// GET ROUTE TO CREATE TOURISTIC POINTS

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

// POST ROUTE TO SUBMIT INFORMATION ABOUT THE CREATED TOURISTIC POINT

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

// GET ROUTE TO EDIT DETAILS ON TOURISTIC POINT

router.get("/cities/:cityId/touristicPoints/:touristicPointId/edit", async (req, res) => {
  try {
    const { cityId, touristicPointId } = req.params;
    let foundTouristicPoint = await TouristicPoint.findById(touristicPointId);
    res.render("touristicPoints/touristicPoint-edit.hbs", { touristicPoint: foundTouristicPoint, cityId });

  } catch (error) {
    console.log(error);
  }
});

// POST ROUTE TO MAKE UPDATES ON A SPECIFIC TOURISTIC POINT 

router.post("/cities/:cityId/touristicPoints/:touristicPointId/edit", async (req, res) => {
  try {
   
    const {cityId} = req.params
    const { touristicPointId } = req.params;
    const { name, description } = req.body;


    await TouristicPoint.findByIdAndUpdate(touristicPointId, { name, description });

    console.log("test");
    // redirect to the specific city list page
    res.redirect(`/cities/${cityId}`);

  } catch (error) {
    console.log(error);
  }
});

// GET ROUTE TO DELETE TOURISTIC POINT

router.post("/cities/:cityId/deleteTouristicPoint/:touristicPointId", async (req, res) => {
  try {
    const {cityId} = req.params
    const { touristicPointId } = req.params;

    const removeTouristicPoint = await TouristicPoint.findByIdAndRemove(touristicPointId)
    
    await City.findByIdAndUpdate(cityId, {$pull: {touristicPoints: removeTouristicPoint._id}});
  
    res.redirect(`/cities/${cityId}`);


  } catch (error) {
    console.log(error);
  }
});

module.exports = router;