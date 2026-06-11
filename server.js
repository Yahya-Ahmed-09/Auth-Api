const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/authroutes.js")

const cors = require("cors");



const app = express();

app.use(express.json());
app.use(cors());


connectDB();

app.get("/api", (req, res)=>{
    res.send("API Is Running")
})

app.get("/", (req, res)=>{
    res.send("API Is Running")
    console.log("API Is Running")
})

app.use("/api/auth", authRoutes);
app.listen(PORT, ()=>{
    console.log(`Server Runnig on ${PORT}`)
})