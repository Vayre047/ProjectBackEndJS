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
    name: 'Milan',
    image: '/images/City-Milan.jpeg',
    description: "A fashion and design capital, Milan is renowned for its elegant architecture, high-end shopping along Via Montenapoleone, and iconic landmarks like the Duomo and Leonardo da Vinci's 'The Last Supper'."
  },

  {
    name: 'Naples',
    image: '/images/City-Naples.jpeg',
    description: "A vibrant coastal city, Naples brims with history, evident in its historic center, UNESCO-listed pizza tradition, and proximity to archaeological sites like Pompeii and Herculaneum. Its energy, cuisine, and stunning bay views captivate visitors."
  },

  {
    name: 'Turin',
    image: '/images/City-Turin.jpg',
    description: "Steeped in history, Turin boasts Baroque palaces, tree-lined boulevards, and the Egyptian Museum showcasing an extensive collection. Known for its pivotal role in Italian unification, it offers a blend of culture and industry."
  },
  
  {
    name: 'London',
    image: '/images/City-London.jpg',
    description: "The sprawling British capital is a melting pot of cultures, housing iconic landmarks such as the Big Ben, Buckingham Palace, and the British Museum, making it a vibrant hub of history, art, and global influences."
  },

  {
    name: 'Edinburgh',
    image: '/images/City-Edinburgh.jpg',
    description: "Scotland's enchanting capital is famed for its historic charm, featuring the Edinburgh Castle, the Royal Mile, and the annual Edinburgh Festival. The juxtaposition of medieval and modern creates a captivating atmosphere."
  },

  {
    name: 'Manchester',
    image: '/images/City-Manchester.jpeg',
    description: "A dynamic northern city, Manchester is known for its industrial heritage, vibrant music scene, and impressive architecture. The city's rich history, marked by the Industrial Revolution, mingles with its contemporary cultural offerings."
  },

  {
    name: 'Birmingham',
    image: '/images/City-Birmingham.jpeg',
    description: "England's second-largest city, Birmingham is a diverse metropolis with an industrial past. Today, it boasts modern architecture, a thriving arts scene, and cultural diversity, making it a center of commerce and culture in the Midlands."
  },

  {
    name: 'Glasgow',
    image: '/images/City-Glasgow.jpeg',
    description: "Scotland's largest city, Glasgow, is renowned for its arts scene, featuring institutions like the Kelvingrove Art Gallery and vibrant live music venues. The city's Victorian architecture and friendly locals contribute to its welcoming atmosphere."
  },

  {
    name: 'Liverpool',
    image: '/images/City-Liverpool.jpeg',
    description: "A maritime gem, Liverpool, boasts a UNESCO-listed waterfront with iconic landmarks like the Liver Building and vibrant cultural spaces like the Royal Albert Dock. As the birthplace of The Beatles, its musical legacy is deeply ingrained, offering a dynamic mix of history and modernity."
  },

  {
    name: 'Paris',
    image: '/images/City-Paris.jpeg',
    description: "The 'City of Love' captivates with its romantic ambiance, defined by the Eiffel Tower, Louvre Museum, and charming Montmartre. Renowned for its café culture and artistry, Paris exudes timeless elegance."
  },

  {
    name: 'Marseille',
    image: '/images/City-Marseille.jpeg',
    description: "France's coastal jewel, Marseille, offers a blend of Mediterranean beauty, historic sites like the Basilique Notre-Dame de la Garde, and a vibrant multicultural atmosphere. Its old port and Calanques National Park enhance its allure."
  },

  {
    name: 'Lyon',
    image: '/images/City-Lion.jpeg',
    description: "Nestled in the Rhône-Alpes region, Lyon boasts Renaissance architecture, a vibrant culinary scene, and the historic traboules (hidden passageways). As a UNESCO Creative City of Gastronomy, it's a haven for food enthusiasts."
  },

  {
    name: 'Bordeaux',
    image: '/images/City-Bordeaux.jpeg',
    description: "Known as the wine capital, Bordeaux showcases elegant 18th-century architecture alongside renowned vineyards. The city's cultural offerings, like the Cité du Vin wine museum, make it a blend of history and oenophilic delight."
  },

  {
    name: 'Toulouse',
    image: '/images/City-Toulouse.jpeg',
    description: "Often called 'La Ville Rose' due to its pink terracotta buildings, Toulouse is a hub of aerospace innovation, historic sites like the Capitole de Toulouse, and a youthful energy fueled by its universities and culture."
  },

  {
    name: 'Athens',
    image: '/images/City-Athens.jpeg',
    description: "As the cradle of Western civilization, Athens marries ancient wonders like the Parthenon with a bustling modern scene, showcasing history and innovation."
  },

  {
    name: 'Santorini',
    image: '/images/City-Santorini.jpeg',
    description: "Renowned for its postcard-perfect sunsets and white-washed buildings with blue domes, Santorini offers breathtaking views over the caldera. Its volcanic beaches, vibrant arts scene, and romantic ambiance make it a dreamy destination."
  },

  {
    name: 'Mykonos',
    image: '/images/City-Mykonos.jpeg',
    description: "A cosmopolitan haven, Mykonos captivates with its lively nightlife, iconic windmills, and golden beaches. The island's mix of luxury, tradition, and vibrant energy creates a unique and unforgettable atmosphere."
  },

  {
    name: 'Dubrovnik',
    image: '/images/City-Dubrovnik.jpeg',
    description: "Dubbed the 'Pearl of the Adriatic', Dubrovnik enchants with its medieval city walls, red-roofed buildings, and stunning coastal views. Its rich history and Game of Thrones fame make it a cultural and visual deligh."
  },

  {
    name: 'Split',
    image: '/images/City-Split.jpeg',
    description: "A blend of ancient and modern, Split features the impressive Diocletian's Palace, a UNESCO World Heritage site, nestled within a lively urban landscape. Its vibrant waterfront, markets, and surrounding islands make it a captivating Dalmatian destination."
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
  },

  {
    name: 'Kyoto',
    image: '/images/City-Kyoto.jpeg',
    description: "Japan's cultural jewel, Kyoto, evokes serenity through its historic temples, traditional tea houses, and enchanting gardens. With a timeless air, it offers a glimpse into Japan's past while embracing its present."
  },

  {
    name: 'Hiroshima',
    image: '/images/City-Hiroshima.jpeg',
    description: "A city of resilience and remembrance, Hiroshima stands as a beacon of peace with its Peace Memorial Park and Museum, honoring the victims of the atomic bombing while promoting a future free of nuclear conflict."
  },

  {
    name: 'Sapporo',
    image: '/images/City-Sapporo.jpeg',
    description: "Embracing winter's beauty, Sapporo hosts captivating snow festivals, winter sports, and a harmonious blend of natural landscapes and urban vibrancy. Its distinct charm shines in every season."
  },

  {
    name: 'Fukuoka',
    image: '/images/City-Fukuoka.jpeg',
    description: "Nestled along the coast, Fukuoka exudes a blend of ancient traditions and modern liveliness. With its ancient temples, bustling night markets, and rich historical tapestry, it offers a coastal charm unique to southern Japan."
  },

  {
    name: 'New York',
    image: '/images/City-NewYork.jpeg',
    description: "The city that never sleeps, New York dazzles with iconic skyscrapers, Central Park's green respite, world-class museums, and the bustling energy of Times Square."
  },

  {
    name: 'Los Angeles',
    image: '/images/City-LosAngeles.jpeg',
    description: "The entertainment capital, LA showcases Hollywood glamour, stunning beaches, cultural diversity, and the artistic vibes of neighborhoods like Venice and Hollywood."
  },

  {
    name: 'San Francisco',
    image: '/images/City-SanFrancisco.jpeg',
    description: "TA blend of beauty and innovation, San Francisco features the Golden Gate Bridge, historic cable cars, tech giants in Silicon Valley, and a bohemian spirit in neighborhoods like Haight-Ashbury."
  },

  {
    name: 'Chicago',
    image: '/images/City-Chicago.jpeg',
    description: "Known for its architectural marvels, Chicago offers a striking skyline, deep-dish pizza, a rich history in blues music, and iconic landmarks like Millennium Park's 'Bean'."
  },

  {
    name: 'New Orleans',
    image: '/images/City-NewOrleans.jpeg',
    description: "A city of jazz, Creole cuisine, and vibrant festivals, New Orleans' French Quarter and Mardi Gras celebrations encapsulate its lively spirit."
  },

  {
    name: 'Miami',
    image: '/images/City-Miami.jpeg',
    description: "A tropical paradise, Miami boasts stunning beaches, Art Deco architecture in South Beach, Latin-American culture, and a thriving nightlife along Ocean Drive."
  },

  {
    name: 'Sydney',
    image: '/images/City-Sydney.jpeg',
    description: "With its iconic harbor, Sydney Opera House, and bustling cosmopolitan vibe, Sydney is a captivating blend of stunning urban architecture and natural beauty."
  },

  {
    name: 'Melbourne',
    image: '/images/City-Melbourne.jpeg',
    description: "A cultural haven, Melbourne is celebrated for its art scene, thriving coffee culture, diverse neighborhoods, and vibrant street art."
  },

  {
    name: 'Brisbane',
    image: '/images/City-Brisbane.jpeg',
    description: "Basking in sunshine, Brisbane offers a laid-back Australian lifestyle, along with outdoor activities, riverfront spaces, and a warm, welcoming atmosphere."
  },

  {
    name: 'Perth',
    image: '/images/City-Perth.jpeg',
    description: "Isolated but thriving, Perth boasts pristine beaches, outdoor adventures like surfing and hiking, and a lively urban scene that's embraced its remote location."
  },

  {
    name: 'Adelaide',
    image: '/images/City-Adelaide.jpeg',
    description: "Nestled amidst vineyards, Adelaide's charm lies in its festivals, cultural events, and harmonious fusion of historical charm and modern vibrancy."
  },

  {
    name: 'Canberra',
    image: '/images/City-Canberra.jpeg',
    description: "As the capital, Canberra showcases serene lakeside settings, impressive museums, government buildings, and a balance between cultural heritage and administrative importance."
  },

  {
    name: 'Johannesburg',
    image: '/images/City-Johannesburg.jpeg',
    description: "The economic heart of South Africa, Johannesburg pulses with urban energy, offering cultural diversity, historic sites like Apartheid Museum, and a thriving arts scene."
  },

  {
    name: 'Cape Town',
    image: '/images/City-CapeTown.jpeg',
    description: "A natural wonderland, Cape Town boasts Table Mountain's majestic backdrop, stunning beaches, vibrant neighborhoods, and a rich history seen through Robben Island and the Cape of Good Hope."
  },

  {
    name: 'Durban',
    image: '/images/City-Durban.jpeg',
    description: "A coastal delight, Durban charms with warm beaches, Indian-infused cuisine, and a laid-back atmosphere perfect for surfing and cultural exploration."
  },

  {
    name: 'Pretoria',
    image: '/images/City-Pretoria.jpeg',
    description: "South Africa's administrative center, Pretoria combines dignified government buildings, beautiful gardens, and historical sites like Voortrekker Monument, encapsulating the country's heritage."
  },

  {
    name: 'Port Elizabeth',
    image: '/images/City-PortElizabeth.jpg',
    description: "Known as 'The Friendly City', Port Elizabeth offers a mix of wildlife, beautiful beaches, and a relaxed coastal lifestyle along with historic sites like Donkin Reserve."
  },

  {
    name: 'Bloemfontein',
    image: '/images/City-Bloemfontein.jpeg',
    description: "A serene city adorned with gardens, Bloemfontein exudes a calm atmosphere, hosting historic architecture, the National Museum, and an annual rose festival."
  },

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