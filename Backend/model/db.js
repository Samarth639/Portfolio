const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://saxenasamarth55:1234567890@cluster0.1l57spl.mongodb.net/PortfolioDB')
    .then(res =>console.log("DB connected"))
    .catch(err =>console.log("Error" , err)) 