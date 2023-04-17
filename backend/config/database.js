const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })

const connectDatabase = () => {
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL)
        .then((con) => {
            console.log(`MongoDB connection SuccessFully`);
        })
}

module.exports = connectDatabase;