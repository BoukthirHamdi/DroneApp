
const bcrypt = require("bcrypt");
const { error } = require('console');
const usersModel = require("../model/usersModel");


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






