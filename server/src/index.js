const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.js");


const app = express(); //
const PORT = process.env.PORT || 5000; //

require("dotenv").config(); //environment variable, allows us to involve environment varialble

app.use(cors()); // allows us to create cross origin requests
app.use(express.json()); //allows us to pass json payloads from front end to backend
app.use(express.urlencoded()) //built in middleware function in express
app.use(bodyParser.json());

app.get("/", (req, res) => { //request and response method
    res.send("Hello, World!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//this is  the minimal instance of express application