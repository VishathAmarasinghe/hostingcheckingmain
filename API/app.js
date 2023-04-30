const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const date=require('../API/Routes/date');
dotenv.config();


app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to the database"))
  .catch((err) => console.log(err));


app.listen("5006",()=>{
    console.log("app is listining to 5006");
})

app.use("/date",date);