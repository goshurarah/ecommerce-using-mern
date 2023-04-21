const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Users = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");


// Signup Users
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, phoneNo, email, password } = req.body

    const user = await Users.create({
        name,
        email,
        phoneNo,
        password,
    })
    sendToken(user, 201, res);

})

// Login Users
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email or Phone No and Password", 400))
    }
    const user = await Users.findOne({
        email
    }).select("+password")

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 201, res);

})

// Logout Users
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
