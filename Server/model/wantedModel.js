const mongoose = require("mongoose");

const wantedSchema = new mongoose.Schema({
     name: {
         type: String,
        required: true,
        
         max: 50,
         unique: true,
     },
     cin: {
         type: String,
         required: true,
         min: 8,
         max: 8,
         unique: true,
     },
     adress: {
         type: String,
         required: true,
     },
     birthday: {
         day: {
           type: Number
         },
         month: {
           type: Number
         },
         year: {
           type: Number
         } },
     images:{
         type:String
     },
     file:{
        type:String
     },
     stars:{
      type:String
     }
 });

 module.exports = mongoose.model("Wanted", wantedSchema);