const {login, addUser, getUsers, deleteUser} = require("../controllers/usersController")

const router = require("express").Router();


router.post("/login",login);
router.post("/addUser",addUser);
router.get("/getUsers",getUsers)
router.post("/deleteUser",deleteUser)



module.exports = router;