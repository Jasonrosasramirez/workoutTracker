/* -- Basic imports -- */
const express = require("express"); 
const mongoose = require("mongoose");

const app = express(); 


/* -- utilizing the app -- */
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


/* -- connection with mongo atlas -- */
mongoose.connect(); 




/* -- Listing on Port 4000 -- */
const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`); // displaying the variable port information. 
});