const express=require("express");
const UserModel=require('../modals/userModel');
const expressAsyncHandler=require('express-async-handler');
const loginController=()=>{};
const registerController=expressAsyncHandler(async(req,res)=>{
    const [name,email,password]=req.body;
    //check for fields
    if (!name || !email || !password){
        throw Error("All necessary input fields have not filled");
    }
    //preexisting user
    const userExist=await UserModel.findOne((email));
    if (userExist){
        throw new Error('User already Exists');
    }
    //userName already taken
    const userNameExist=await UserModel.findOne({email});
    if(userNameExist){
        throw new Error('User already taken');
    }
    //create an entry in db
    const user=await UserModel.create({name,email,password});


});
module.exports={loginController,registerController};