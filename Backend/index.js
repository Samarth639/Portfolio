const express = require("express")
const emp = require("./model/employee.model")
const cors=require('cors');
const app = express()
var bodyParser = require('body-parser');


require("./model/db")

app.use(express.json())
app.use(cors())
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.post("/submit" , (req,res)=>{
    const{firstname,lastname,email,message} = req.body
    console.log(firstname,lastname,email,message);
    let myemp = new emp()
        myemp.firstname = firstname
        myemp.lastname= lastname
        myemp.email= email
        myemp.message= message
        myemp.save()
            .then(res => console.log("Data added successfully",res))
            .catch(err =>console.log("Error",err))
        res.redirect('http://127.0.0.1:5500/index.html');
})

// app.get("/emp" , (req,res)=>{
//     emp.find()
//         .then(result =>console.log(result))
//         .catch(err =>console.log(err))
// })

// // app.get("/emp/:id" , (req,res)=>{
// //     emp.findById(req.params.id)
// //         .then(res =>console.log(res))
// //         .catch(err =>console.log(err))
// // })

// app.delete("/emp/:id" , (req,res)=>{
//     emp.findByIdAndDelete(req.params.id)
//         .then(result =>console.log("result", result))
//         .catch(err =>console.log("error" , err))
// })

app.get('/',(req,res)=>{
    res.send("<h1>welcome to server</h1>");
})

const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`server is listening at port number ${PORT}`)
})