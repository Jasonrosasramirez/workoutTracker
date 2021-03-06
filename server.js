/* -- Basic imports -- */
const express = require("express"); 
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression"); 

const PORT = process.env.PORT || 4000; 
const app = express(); 
require("dotenv").config(); // references the .env file


/* -- utilizing the app -- */
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


/* -- connection with mongo atlas -- */
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nudget", {
    useNewUrlParser: true,
    useFindAndModify: false
}); 


/* -- routes -- */
app.use(require("./routes/api.js"));


/* -- Listing on Port 4000 -- */
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // displaying the variable port information. 
});