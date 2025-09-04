const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://tarunahuja199_db_user:2wQlkWn4CCt1Tx2i@cluster0.wcfwjrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const subscribeFormSchema=new mongoose.Schema({
    First:String,
    Last:String,
    Email:String,
})
const subscribeFormModel=new mongoose.model('Subscribe',subscribeFormSchema)
subscribeFormModel.insertMany([{First:'Tarun',Last:'Ahuja',Email:'taruna@gmail.com'}])
module.exports=subscribeFormModel;
