require('dotenv').config();
const mongoose=require('mongoose')
MONGO_URI='mongodb+srv://tarunahuja199_db_user:2wQlkWn4CCt1Tx2@cluster0.mongodb.net/yourDB'
mongoose.connect(process.env.MONGO_URI)
const subscribeFormSchema=new mongoose.Schema({
    First:String,
    Last:String,
    Email:String,
})
const subscribeFormModel=new mongoose.model('Subscribe',subscribeFormSchema)
subscribeFormModel.insertMany([{First:'Tarun',Last:'Ahuja',Email:'taruna@gmail.com'}])
module.exports=subscribeFormModel;
