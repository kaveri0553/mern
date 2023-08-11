const express = require("express");
var userObj = require('./mongo')
var usero = userObj.user1
const port = 8778

const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
     data = await usero.find()
    if(data){
        res.send(data)
    }else{
        console.log("hhhhh")
    }
})

app.get('/:id',async(req,res)=>{
    console.log(req.params);
    let data=await usero.find({_id:req.params.id});
    console.log(data);
    res.send(data)
})

app.post('/data',async(req,res)=>{
    // const {name,age} = req.body
    // let data = new usero({
    //     name,age
    // }) 
    // try{
    //     await data.save()
    // }catch(err){
    //     return console.log(err)
    // }
    // return res.send(data)
    data=req.body;
     let u = await usero(data)
     let v=u.save();
     console.log(v)
    res.send(req.body);
})

app.put('/',async (req,res)=>{
    console.log(req.body._id);
    console.log(req.body.name);
    console.log(req.body.age);
    let u = await usero.updateOne({_id:req.body._id},
        {$set:
            {name:req.body.name,
             age:req.body.age
            }})
    res.send(req.body);
})

app.delete('/',async(req,res)=>{
    console.log(req.body.name);
    let data = await user1.deleteOne({_id:req.body._id})
    console.log(data);
    res.send({"result":"delete req hit"});
})

app.listen(port,()=>{
    console.log(`listing on port${port}`)
})
