const {login, addUser, updateUser} = require("../controllers/usersController")

const router = require("express").Router();


router.post("/login",login);
router.post("/addUser",addUser);
router.put("/updateUser",updateUser);


module.exports = router;