const express = require("express");
const router = express.Router();
const {registerController, loginController} = require("../controllers/authController")

///////////////////////         Auth Routes ////////////////////////////

router.post("/auth/register", registerController);

router.post("/auth/login", loginController)

module.exports = router;
