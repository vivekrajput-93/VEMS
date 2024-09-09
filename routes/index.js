const express = require("express");
const router = express.Router();
const {registerController, loginController, testController} = require("../controllers/authController");
const { requiredSignIn, isAdmin } = require("../middlewares/authMiddleware");
const { createEmployeeController } = require("../controllers/EmployeeController");
const { createDepartmentController } = require("../controllers/DepartmentController");

///////////////////////         Auth Routes ////////////////////////////

router.post("/auth/register", registerController);

router.post("/auth/login", loginController);


/////////////////     test Route //////////////////////////////////////

router.get("/auth/test", requiredSignIn, isAdmin, testController);




/////////////////////       Department Routes ///////////////////

router.post("/auth/create-dept", createDepartmentController)


//////////////////    Employees Routes  //////////////////////////////

router.post("/auth/createEmployee",  createEmployeeController)





module.exports = router;
