const JWT  = require('jsonwebtoken');
const {promisify} = require('util');
const User = require('../models/user');
const emailSender = require('../config/sendgrid');
const crypto = require ('crypto');

const signintoken = user =>{
  console.log(user);
  return JWT.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRESIN});
}

exports.signup = async(req,res)=>{
  try{
    const {username, email,password,passwordChangedAt,role} = req.body
    const user = await User.findOne({email});
    if(user){
      return res.status(500).json({error:'email in use'});
    }
    const moduser = new User(req.body);
    console.log(moduser)
    await moduser.save();
    const token = signintoken(moduser);


    res.status(200).json({token});



  }catch(err){
    res.status(422).send(err)
  }
}

exports.login = async(req,res)=>{
  try {

        const user = await User.comparepasswords(req.body.email,req.body.password)


        if(!user){
          console.log('Incorrect email or password');
        }

        const token = signintoken(user);
        res.status(200).json({token})
   } catch (error) {
       res.status(500).json(error)
   }
 }

exports.authRoutes = async(req,res,next)=>{
    try{
     let token;

     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       token = req.headers.authorization.split(' ')[1];
     }

     if(!token){
       return next(new Error('no Token'))

     }





     const decoded = await promisify(JWT.verify)(token,process.env.JWT_SECRET);

      const user = await User.findById(decoded.id)
      if(!user){
        throw new Error('Please log in',401)
      }
      if(user.changedPasswordfuture(decoded.iat)){
        throw new Error('Password change, log in again',401);
        return next()
      }

      req.user = user;

      next();
   }catch(err){
     console.log(err)

   }

}

exports.adminRoutes = async(req,res,next)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return next(new AppError('You dont have permission',403))
    }
    next();
  }
}

exports.forgotpassword = async (req,res,next)=>{
  try{
    const user = await User.findOne({email:req.body.email})
    if(!user){
      return next(new AppError('No user with that email address',404));
    }
    const resetToken = user.passwordReset();
    await user.save({validateBeforeSave:false});

    try{
    await emailSender({
      email:user.email,
      subject:'Password Reset',
      message:'needs link to password reset',
      html:`<p> click this <a href="http://localhost:2000/auth/resetpassword${resetToken}">link</a>!!</p>`
    })

    res.status(200).json({
      status:'success',
      resetToken

    });
  }catch(err){
    console.log(err);
  }

  }catch(err){
      user.resetToken = undefined;
      user.resetExpireTime = undefined;
       user.save({validateBeforeSave:false});
      return next();
  }

}

exports.resetPassword =async (req,res,next)=>{

  try{
  const hashedToken = crypto.createHash('sha256')
                            .update(req.params.token)
                            .digest('hex');

      const user = await User.findOne({
        resetToken:hashedToken,
        resetExpireTime: {$gt: Date.now()}
      });

    if(!user){
      return next(new AppError('Token is expired',400))
    }
    user.password = req.body.password;
    user.resetToken = undefined;
    user.resetExpireTime = undefined;

    await user.save();
    const token = signintoken(user);
    res.status(200).json({
      status:'success',
      token
    })
}catch(err){
  return next(new AppError('Try again'))
}


}




module.exports= exports;
