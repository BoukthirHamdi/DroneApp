const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")
const wantedRoutes = require("./routes/wantedRoutes")

const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use("/api/auth", userRoutes)
app.use("/api/auth", wantedRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>{
    console.log("DB is Connected");
}).catch((err)=>{
    console.log(err.message)
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}`);
});