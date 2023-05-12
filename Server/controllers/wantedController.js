const wantedModel = require("../model/wantedModel");


//get wantedssss
module.exports.getWanteds = async(req, res, next) => {
    try{
        const wantedData= await wantedModel.find({});

        return res.json({
            
            wantedData
            
        });
    }catch(ex){
        next(ex)
    }
}


//get wanted
module.exports.getWanted = async(req, res, next)=>{
    try{
        const wantedId = req.params.id;
        const wantedDataId = await usersModel.findById(wantedId);
        wantedDataId.password = "undefined from SSL";
        
        return res.json({
            userDataId
        });
    }catch(ex){
        next(ex)
    }
}


//add wanted
module.exports.addWanted = async(req, res, next) => {
    try{
    const {name, cin, adress, birthday, images,file } = req.body;
    
    const cinCheck = await wantedModel.findOne({cin});
   
    if(cinCheck){
        return res.json({ msg: "CIN is already taken!", status: false});
    }
    const wanted = await wantedModel.create({
        name, 
        cin, 
        adress , 
        birthday, 
        images, 
        file
    });
    return res.json({status: true, wanted});
}catch(ex) {
    next(ex);
    }
};

//update wanted
module.exports.updateWanted = async(req, res, next)=>{
    try{
        const cinWanted = req.body.wantedcin
        const updatedWantedData = req.body.wanted;
        const wantedUpdate = await wantedModel.updateOne({_cin: cinWanted}, {$set: updatedWantedData});
        return res.json({status: true});
    }catch(ex){
        next(ex)
    }
}

//delete user
module.exports.deleteWanted = async(req, res, next) => {
    try{
        const cinWanted  = req.body.wantedcin;
        const wantedData= await wantedModel.deleteOne( { "_cin" : cinWanted } );
        return res.json({status: true, wantedData});
    }catch(ex){
        next(ex)
    }
}

