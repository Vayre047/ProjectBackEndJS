const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
  name: String,
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/536px-Lisbon_%2836831596786%29_%28cropped%29.jpg",
  },
  cities: [
    {
      type: Schema.Types.ObjectId,
      ref: "City",
    },
  ],
});

module.exports = model("Country", countrySchema);
