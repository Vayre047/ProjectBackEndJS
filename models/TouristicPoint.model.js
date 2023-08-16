const { Schema, model } = require("mongoose");

const touristicPointSchema = new Schema({
  name: String,
  description: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = model("TouristicPoint", touristicPointSchema);
