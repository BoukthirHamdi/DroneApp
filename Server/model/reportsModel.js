const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    cin: {
        type: String,
        
        min: 8,
        max: 8,
        unique: true,
    },
    name:{
        type: String,
    },
    time:{
        type: String,
    },
    lat: {
        type: Number,
    },
    len: {
        type: Number,
    }
});

module.exports = mongoose.model("Reports", reportSchema);