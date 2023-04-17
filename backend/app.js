const express=require("express")
const errorMiddleware=require("./middleware/error")

const app =express();
const cokieparser=require("cookie-parser")
const bodyParser=require("body-parser")

app.use(express.json())
app.use(cokieparser())
app.use(bodyParser.urlencoded({extended:true}))

// routes imports 
const user=require("./routes/userRoutes");

app.use("/api/v1",user)



app.use(errorMiddleware)
module.exports=app;