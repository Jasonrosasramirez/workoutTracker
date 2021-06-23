// Basic Imports 
const express = require("express");
const mongoose = require("mongoose");
const app = express(); 

const PORT = process.env.PORT || 3000; 

require("dotenv").config(); // references the .env file


// app.use 
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static("public"));


/* -- mongoose database -- */
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', // from mongoDB Atlas. 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  ); // useful for connection to Heroku 
 

app.use(require("./routes/index.js"));


/* -- Listing on Port 3000 -- */
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // displaying the variable port information. 
});