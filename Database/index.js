const mongoose = require("mongoose");
function connectDatabase(){
    mongoose.connect("link of connecting string");
    console.log("Message");
}