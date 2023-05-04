
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { error } = require('console');
const usersModel = require("../model/usersModel");


//login
module.exports.login = async(req, res, next) => {
    try{
    const { username, password } = req.body;
    const user = await usersModel.findOne({username});
    
    if(!user){
        
        return res.json({ msg: "Incorrect Data! Please check your username and password", status: false});
        
    }
    user.password == password ? isPasswordValid = true : isPasswordValid = false;
    if(!isPasswordValid){
        
        return res.json({ msg: "Incorrect Data! Please check your username and password", status: false});
    }
    delete user.password;

    
    return res.json({status: true, user});
}catch(ex) {
    next(ex);
}
};

//add user
module.exports.addUser = async(req, res, next) => {
    try{
    const {name, username, password, grade, role, email, phone, images } = req.body;
    const usernameCheck = await usersModel.findOne({username});
    if(usernameCheck){
        return res.json({ msg: "Username is already taken!", status: false});
    }
    const emailCheck = await usersModel.findOne({email});
    if(emailCheck){
        return res.json({ msg: "E-mail is already used!", status: false});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usersModel.create({
        name, 
        username, 
        password : hashedPassword, 
        grade, 
        role, 
        email, 
        phone, 
        images,
    });
    delete user.password;
    return res.json({status: true, user});
}catch(ex) {
    next(ex);
}
};


//update user
module.exports.updateUser = async (req, res) => {
    try {
      const updateUser = await usersModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


module.exports = router;







