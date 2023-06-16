const reportsModel = require("../model/reportsModel");

module.exports.addReports = async(req, res, next) => {
    try{
        const{cin, name, time, lat, len} = req.body;
        
        
            const report = await reportsModel.create({
                cin,
                name,
                time,
                lat,
                len
            })
            return res.json({status: true, report})
       
    }catch(ex){
        next(ex);
    }
}