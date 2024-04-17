const express=require('express');
const dotenv=require('dotenv');
const userRoutes=require('./Routes/userRoutes');
const mongoose=require('mongoose');
const app=express();
dotenv.config();
app.use(express.json());

const connectDb=async()=>{
    try{
   const connect=await mongoose.connect(process.env.MONGO_URI);
   console.log('Server is connected to DB');
    }
    catch(err){
        console.log('Server is not connected to database',err.message);
    }

};
connectDb();
app.get('/',(req,res)=>{
    res.send('API is runninggg');
});
app.use('/user',userRoutes);
console.log(process.env.MONGO_URI);

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log('server is running...'));