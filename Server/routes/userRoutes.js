const {login, addUser, getUsers, deleteUser, getUser,updateUser} = require("../controllers/usersController")

const router = require("express").Router();


router.post("/login",login);
router.post("/addUser",addUser);
router.get("/getUsers",getUsers)
router.post("/deleteUser",deleteUser);
router.get("/getUser/:id",getUser)
router.post("/updateUser",updateUser)



module.exports = router;