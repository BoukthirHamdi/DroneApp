const {addReports} = require("../controllers/reportsController");

const router = require("express").Router();

router.post("/addReports",addReports);
module.exports = router;