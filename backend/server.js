const app=require("./app")
const connectDatabase = require("./config/database")

const dotenv=require("dotenv");
dotenv.config({path:'../backend/config/config.env'})

// handel uncaughtException 
process.on("uncaughtException", (err) => {
    console.log((`Error: ${err.message}`));
    console.log("Shutting down the server due to Unhandeled uncaughtException");

})


// database connection 
connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening On http://localhost:${process.env.PORT}`);
})


process.on("unhandledRejection",(err)=>{
    console.log(`Error :${err.message}`);
    console.log("Shutting Down the Server Due to unhandeled Promise Rejection");
    server.close(()=>{
        process.exit(1)
    })
})