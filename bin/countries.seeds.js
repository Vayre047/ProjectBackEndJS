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


const countries = [

  {
    name: 'Italy',
    image: '/images/Country-Italy.jpg',
    description: "Italy, a timeless masterpiece of culture and beauty, unfolds its rich tapestry of art, architecture, and culinary delights across diverse landscapes, from the romantic canals of Venice to the historic ruins of Rome."

  },

  {
    name: 'Japan',
    image: '/images/Country-Japan.jpg',
    description: "Japan, a captivating blend of ancient tradition and technological innovation, offers a journey through serene temples, serene landscapes, and bustling modern cities, all underpinned by a deep reverence for harmony and balance."
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