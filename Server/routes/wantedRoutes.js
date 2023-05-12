const { addWanted, updateWanted, deleteWanted, getWanted, getWanteds } = require("../controllers/wantedController");

const router = require("express").Router();

router.post("/addWanted",addWanted);
router.get("/getWanted",getWanted);
router.get("/getWanteds",getWanteds)
router.post("/updateWanted",updateWanted);
router.post("/deleteWanted",deleteWanted);


module.exports = router;