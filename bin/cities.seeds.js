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
const cities = [
  {
    name: 'Rome',
    image: '/images/City-Rome.jpeg',
    description: "Rome is the capital of Italy and the largest and most populous city in the country. It covers an area of 1,285 square kilometres and has nearly 3 million residents. Roma is also the largest of the 8,101 communes in Italy. According to legend, the city of Rome was founded by Romulus and Remus, twin sons of the god Mars, who were left to die as babies and were rescued and suckled by a she-wolf. Whatever its true origins, it seems to have been established sometime around the 8th century BC."
  },

  {
    name: 'Florence',
    image: '/images/City-Florence.jpg',
    description: "Florence is the capital city of the Italian region of Tuscany and of the province of Florence. The city lies on the River Arno and is known for its history and its importance in the Middle Ages and in the Renaissance, especially for its art and architecture. A centre of medieval European trade and finance and one of the wealthiest cities of the time. Florence is considered the birthplace of the Renaissance. A turbulent political history included periods of rule by the powerful Medici family, religious and republican revolution. From 1865 to 1870 the city was also the capital of the Kingdom of Italy. Florence is often known as the 'Jewel of the Renaissance'."

  },
  {
    name: 'Venice',
    image: '/images/City-Venice.jpg',
    description: "Venice Italy is an Italian city located in the northeast of the State. Venice, Venezia in Italian, is best known for its beauty, canals, architecture, and art. But there is more! This small city founded in the middle of a lagoon has been one the most powerful European States for several centuries, giving birth to a culture and lifestyle that are incredibly unique. Often called the Serenissima, after the successful government which ruled the city, Venice has been for centuries the favourite city of artists and inventors."
  },
  {
    name: 'Tokyo',
    image: '/images/City-Tokyo.jpg',
    description: "Tokyo, Japan's vibrant capital, seamlessly blends tradition and modernity. Its dynamic skyline, studded with skyscrapers, houses tech giants and cultural landmarks. From the serene Meiji Shrine to the bustling Shibuya Crossing, Tokyo offers an immersive journey through contemporary trends and historical treasures."
  },

  {
    name: 'Osaka',
    image: '/images/City-Osaka.jpeg',
    description: "Osaka, a culinary haven in Japan, entices with its bustling streets and lively atmosphere. Iconic for its street food and Takoyaki, this city boasts modern architecture alongside historical sites like Osaka Castle. Known for its warmth, Osaka welcomes visitors to explore its unique blend of tradition and urban energy."
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
  

