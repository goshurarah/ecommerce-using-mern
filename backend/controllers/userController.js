const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");



exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, phoneNo, email, password } = req.body

    const user = await User.create({
        name,
        email,
        phoneNo,
        password,
    })
    sendToken(user, 201, res);

})

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email or Phone No and Password", 400))
    }
    const user = await User.findOne({
        email
    }).select("+password")

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 201, res);

})

// Logout User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
