
const mongoose =require("mongoose");

const concernSchema=new  mongoose.Schema({
    tname:String,
    temail:String,
    subject:String,
    desc:String,
    ptype:String,
    uemail:String,
    astatus:String,
   
})

const ConcernModel=mongoose.model('Concern',concernSchema);
module.exports=ConcernModel;