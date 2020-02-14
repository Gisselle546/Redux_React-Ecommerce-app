const Product = require('../models/product');


exports.getProducts = async (req,res,next)=>{
  try{
    const products = await Product.find({})
      res.status(200).json(products);
  }catch(err){
    res.status(500).send(err);
  }

}

exports.createProduct = async (req,res,next)=>{

  try{
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.status(201).json(product);
  }
  catch(err){
    res.status(500).send(err);
  }
}


exports.getProduct = async (req,res,next) =>{

try{
  const{productid} =req.params;
  const product = await Product.findById(productid);
  res.status(200).json(product);
}
catch(err){
  res.status(500).send(err);
}

}

exports.searchProduct = async(req,res,next)=>{
  try{
    console.log(req.query.results);
    const course = await Product.find({title: { $regex: new RegExp(req.query.results), $options: 'i' }})
    console.log(course)

    res.status(200).json(course)

  }catch(err){
    res.status(500).send(err);
  }
}


exports.replaceProduct = async(req,res) =>{
  const {productid} = req.params;
  const newProduct = req.body;

  try{
    const result=Product.findOneAndUpdate(productid,newProduct,{new:true})
    res.status(200).json({success:true});
  }catch{
    res.status(500).send(err);
  }

}

module.exports = exports;