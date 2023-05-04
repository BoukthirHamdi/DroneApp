const {login, addUser} = require("../controllers/usersController")

const router = require("express").Router();


router.post("/login",login);
router.post("/addUser",addUser);


module.exports = router;