const mongoose=require("mongoose");

const dateformat=new mongoose.Schema({
    dateName:{
    type:String,
    required:true
    }
})

module.exports=mongoose.model("hackxJrDate",dateformat);