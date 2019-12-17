const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username:{
        type: String,
        unique:true,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
      type:String,
      enum:['user','admin'],
      default:'user'
    },
    passwordChangedAt:{
      type:Date,
      default:Date.now()
    },
    resetToken:String,
    resetExpireTime:Date,

  


});

userSchema.pre('save',async function(next){
    try{
        const user = this;
          if(!user.isModified('password')||!user.isNew) return next();

          const salt = await bcrypt.genSalt(12);
          const hash = await bcrypt.hash(user.password,salt);
          user.password = hash;
          this.passwordChangedAt = Date.now() - 1000;



    }catch(e){
        next(e);
    }
})

userSchema.statics.comparepasswords = async function(email,password){

    try {
      const user = await User.findOne({email});
      console.log(user.password);
      console.log(password);
      if(!user){
         throw new Error('This user doesnt exist, sign up now! ');
      }
      const isMatch = await bcrypt.compare(password,user.password);
        console.log(isMatch);
      if (!isMatch){
        throw new Error('password is incorrect');
      }



      return isMatch;

  }catch(e){
    return e;
  }
}

userSchema.methods.changedPasswordfuture = function(time){
  if(this.passwordChangedAt){
    const newTime = parseInt(this.passwordChangedAt.getTime()/1000,10)
      return  time < newTime;
  }

  return false;
}

userSchema.methods.passwordReset = function(){
  const resetPassword =  crypto.randomBytes(32).toString('hex');

  this.resetToken = crypto.createHash('sha256').update(resetPassword).digest('hex')

  this.resetExpireTime = Date.now() + 14 * 60 * 1000;

  return resetPassword;
}


const User = mongoose.model('User',userSchema);
module.exports = User;
