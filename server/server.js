const express=require('express')
const app=express();
const path=require('path')
const subscribeModel=require('../dataModels/subscribeFormHomePage')
app.listen(5500,()=>{console.log('Server Started')})
app.use(express.static(path.join(__dirname,'..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','Home.html'));
})
app.post('/',(req,res)=>{
    const dataFromUser=req.body;
    subscribeModel.insertMany([{First:dataFromUser.First,Last:dataFromUser.Last,Email:dataFromUser.Email}])
    res.redirect('/')
})