/* -- Basic imports -- */
const express = require("express"); 
const router = express.Router(); 
const mongoose = require("mongoose");

const app = express(); 


/* -- utilizing the app -- */



/* -- connection with mongo atlas -- */
mongoose.connect(); 




/* -- Listing on Port 4000 -- */
const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // displaying the variable port information. 
});