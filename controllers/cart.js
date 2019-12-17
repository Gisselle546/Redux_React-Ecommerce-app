const Cart = require('../models/cart');


exports.postItem = async (req,res,next)=>{
  try{

    const user = req.user;
    const items = req.body;

    const cart = new Cart({

      items,
      user
    })

    cart.save((error,cart)=>{
        if(error){
          return res.status(422).json({
            error:'could not be processed'
          });
        }
        Cart.findById(cart._id)
            .populate('items user')
            .exec((error,cart)=>{
                if(error){
                  return res.status(422).json(error)
                };


              res.status(200).json({
                success:true,
                cart:cart
              })
            })
    })

  }catch(err){
    res.status(500).send(err);
  }

}


exports.getCart = async(req,res,next)=>{
  try{
      const cart = await Cart.find({})
      .populate('items user')
      .exec((error, cart) => res.status(200).json({
        cart,status:'success'
      }))

  }catch(error){
    res.status(500).json(error)
  }
}


exports.deleteCartItem = async(req,res,next)=>{
  try{
      const cart = await Cart.findByIdAndRemove(req.params.id)

      res.status(200).json({message:'Deleted'})
  }catch(error){
    res.status(500).json(error)
  }
}

module.exports = exports;
