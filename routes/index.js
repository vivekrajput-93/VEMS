const express = require("express");
const router = express.Router();
const {registerController, loginController, testController} = require("../controllers/authController");
const { requiredSignIn, isAdmin } = require("../middlewares/authMiddleware");
const { createEmployeeController, getEmployeeController } = require("../controllers/EmployeeController");
const { createDepartmentController, getDepartmentController, deleteDepartmentController, updateDepartmentController } = require("../controllers/DepartmentController");

///////////////////////         Auth Routes ////////////////////////////

router.post("/auth/register", registerController);

router.post("/auth/login", loginController);


/////////////////     test Route //////////////////////////////////////

router.get("/auth/test", requiredSignIn, isAdmin, testController);




/////////////////////       Department Routes ///////////////////

router.post("/auth/create-dept", createDepartmentController)

router.get("/auth/get-dept", getDepartmentController)

router.delete("/auth/delete-dept/:id", deleteDepartmentController)

router.put("/auth/update-dept/:id", updateDepartmentController)

//////////////////    Employees Routes  //////////////////////////////

router.post("/auth/createEmployee",  createEmployeeController)

router.get("/auth/get-employee", getEmployeeController)


module.exports = router;
