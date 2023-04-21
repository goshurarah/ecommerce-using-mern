const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`MongoDB connected SuccessFully`);
    })
}

module.exports = connectDatabase;