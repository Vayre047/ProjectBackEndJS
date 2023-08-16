const {Schema, model} = require('mongoose')

const reviewSchema = new Schema ({
  content: String,
  rating: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Review', reviewSchema);

