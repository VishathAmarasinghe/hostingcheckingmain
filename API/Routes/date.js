const express=require('express');
const router=express.Router();
const datetake=require('../Modules/datemodule');


router.get("/",async(req,res)=>{
    try {
        const result= await datetake.find();
        res.send(result);
    } catch (error) {
        res.send("error "+error);
    }
})


router.post("/",async (req,res)=>{
    const newdate=new datetake({
        dateName:req.body.dateName
    })
    try {
        const sendData=await newdate.save();
        res.send(sendData);
    } catch (error) {
        res.send("error "+error);
    }
})

module.exports=router;