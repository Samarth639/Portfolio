const mongoose = require("mongoose")

let employeeschema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
})

let Employee = mongoose.model('Employee' , employeeschema)

module.exports = Employee