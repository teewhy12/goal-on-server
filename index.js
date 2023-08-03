require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const cors = require("cors");
const goalRouter = require("./routes/goalRouter");

//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/goals", goalRouter);



//db connection
const start = async (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server running`);
        })
    } catch (error) {
        console.log(error);
        
    }
};

start()


app.use((req,res) => {
    res.status(404).send("Resource Not Found");
});