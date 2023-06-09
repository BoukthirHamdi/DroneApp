const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
        max: 50,
        
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
        min:8,
    
    },
    grade:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:""
    },
    email: {
        type: String,
        required: true,
        
        max: 50,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        
        min: 8,
        max: 8,
        unique: true,
    },
    images:{
        type:String
    },
});

module.exports = mongoose.model("Users", userSchema);

