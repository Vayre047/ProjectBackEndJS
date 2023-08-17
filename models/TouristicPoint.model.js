const { Schema, model } = require("mongoose");

const touristicPointSchema = new Schema({
  name: String,
  description: String,
  rating: Number,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = model("TouristicPoint", touristicPointSchema);
