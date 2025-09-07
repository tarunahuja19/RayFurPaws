const mongoose=require('mongoose')
const volunteerFormSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        phone:Number,
        skills:String,
        whyVolunteer:String
    }
)
const volunteerFormModel=new mongoose.model('Volunteer',volunteerFormSchema);
module.exports=volunteerFormModel;