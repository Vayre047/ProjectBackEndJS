const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  name: String,
  description: String,
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/536px-Lisbon_%2836831596786%29_%28cropped%29.jpg",
  },
  touristicPoints: [
    {
      type: Schema.Types.ObjectId,
      ref: "TouristicPoint",
    },
  ],
});

module.exports = model("City", citySchema);
