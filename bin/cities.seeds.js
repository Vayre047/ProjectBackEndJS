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


const cities = [
  {
    name: 'Rome',
    image: '/images/City-Rome.jpeg',
    description: "Rome, the eternal city, brims with millennia of history, showcasing iconic landmarks like the Colosseum, Vatican City, and the Trevi Fountain amidst a captivating blend of ancient ruins and vibrant Italian culture."
  },

  {
    name: 'Florence',
    image: '/images/City-Florence.jpg',
    description: "Florence, a Renaissance masterpiece nestled in Tuscany's embrace, enchants with its artistic legacy, highlighted by the Uffizi Gallery and Michelangelo's David, all set against the backdrop of picturesque architecture along the Arno River."

  },
  {
    name: 'Venice',
    image: '/images/City-Venice.jpg',
    description: "Venice, a captivating labyrinth of canals and palaces, exudes timeless allure through its gondola rides, St. Mark's Square, and intricate Venetian Gothic architecture."
  },
  {
    name: 'Tokyo',
    image: '/images/City-Tokyo.jpg',
    description: "Tokyo, a pulsating metropolis where tradition intersects with modernity, dazzles with its neon-lit skyline, bustling Shibuya Crossing, and serene pockets of traditional gardens and shrines."
  },

  {
    name: 'Osaka',
    image: '/images/City-Osaka.jpeg',
    description: "Osaka, Japan's vibrant urban playground, entices with its lively street food scene at Dotonbori, historic Osaka Castle, and a spirited atmosphere that perfectly balances tradition and contemporary energy."
  }
];

async function insertCities(){
  try{
    // establish the connection with our DB
    await mongoose.connect(MONGO_URI);

    //feedback regarding our connection
    console.log("Database is now connected");

    // create countries in our db with the seeds array
    let citiesCreated = await City.create(cities);

    // feedback about books creation
    console.log(`Created ${citiesCreated.length} cities!`);
    console.log(citiesCreated);

    //Close the connection
    // setTimeout(async() => {
    //   await mongoose.connection.close()
    // },10000)
    
    await mongoose.connection.close()

  }
  catch (error){
    console.log("An error ocurred while connecting to DB", error);
  }
  
}

insertCities();
  

