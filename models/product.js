const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  title:{
    type:String,
    unique:true,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type: String
  },
  productdescription:{
    type:String,
    required:true
  },

  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref:'Review'
    }
  ],




});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
