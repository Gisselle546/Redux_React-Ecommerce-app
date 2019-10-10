const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
  text:{
    type:String,
    required:true
  },
  author:{
    id:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    username: String
  }
});

const Review = mongoose.model('Review',reviewSchema);
