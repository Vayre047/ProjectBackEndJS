//Require Mongoose
const mongoose = require('mongoose');

// Require Country Model
const Country = require('../models/Country.model.js');

// Require City Model
const City = require('../models/City.model.js');

// Require Touristic Points Model
const TouristicPoint = require('../models/TouristicPoint.model.js');

const MONGO_URI =
   "mongodb+srv://tomasagua13:MGB4JVmdFmhHyA4i@cluster0.8hbsnae.mongodb.net/?retryWrites=true&w=majority"

// const MONGO_URI =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ProjectBackEndJS";

const countries = [

  {
    name: 'Italy',
    image: '/images/Country-Italy.jpg',
    description: "Italy is home to some of the world's best food, wine, and art. Add in gorgeous coastlines, beautiful beaches, world-class fashion, phenomenal hiking trails, villas in Tuscany, and gelato, and you have the ingredients for an epic vacation."

  },

  {
    name: 'Japan',
    image: '/images/Country-Japan.jpg',
    description: "Japan is a fascinating country of economic and business prowess, rich culture, technical wizardry, spatial conundrums and contradictions. Japan held onto the title of the world's second largest economy for more than 40 years from 1968 to 2010. Tokyo, Japan's capital city, is the world's largest metropolitan area, with a population of 32.5 million people. Despite having an area slightly bigger than Germany and smaller than California, Japan is the world's tenth largest country by population, with 127.3 million people."
  }

];

async function insertCountries(){
  try{
    // establish the connection with our DB
    await mongoose.connect(MONGO_URI);

    //feedback regarding our connection
    console.log("Database is now connected");

    // create countries in our db with the seeds array
    let countriesCreated = await Country.create(countries);



    // feedback about books creation
    console.log(`Created ${countriesCreated.length} countries!`);
    console.log(countriesCreated);

    //Close the connection
    // setTimeout(async() => {
    //   await mongoose.connection.close()
    // },5000)

    await mongoose.connection.close()

  }
  catch (error){
    console.log("An error ocurred while connecting to DB", error);
  }
  
};

insertCountries();