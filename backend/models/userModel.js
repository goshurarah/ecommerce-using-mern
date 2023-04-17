const  mongoose  = require("mongoose");
const validator=require("validator");
const jwt = require("jsonwebtoken");



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxLength:[30,"Name Cannot Exceed More then 30 Characters"],
        minLength:[4,"Name Should Have More then 4 Characters"],
    },
    phoneNo:{
        type:Number,
        required:[true,"Please Enter Your Phone Number"],
        unique:true,
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"],
      },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password Should be greater than 8 Characters"],
        select: false,
      },
      role: {
        type: String,
        default: "user",
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
})


// JWT TOKEN
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


module.exports=mongoose.model("User",userSchema)