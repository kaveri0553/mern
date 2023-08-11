const mongoose = require('mongoose')
const database = "mongodb+srv://kaverigcse21d:kaverig03@cluster0.kijd5qg.mongodb.net/mongodbtutorial?retryWrites=true&w=majority"
mongoose.connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

 //schema of collection 
.then(console.log("connected to mongoose"))
.catch((err)=>{console.log(err)})

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

//creating and mapping collection 
const userObj = new mongoose.model("user1",userSchema)
// console.log(userObj)

exports.user1 = userObj