const express = require("express");
const router = express.Router();
const {registerController, loginController, testController} = require("../controllers/authController");
const { requiredSignIn, isAdmin } = require("../middlewares/authMiddleware");
const { createEmployeeController, getEmployeeController, deleteEmployeeController, updateEmployeeController } = require("../controllers/EmployeeController");
const { createDepartmentController, getDepartmentController, deleteDepartmentController, updateDepartmentController } = require("../controllers/DepartmentController");
const { generateLeaveController, getLeaveController, deleteLeaveController, updateLeaveController } = require("../controllers/LeaveController");

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

router.get("/auth/get-emp", getEmployeeController)

router.delete("/auth/delete-emp/:id", deleteEmployeeController)

router.put("/auth/update-emp/:id", updateEmployeeController)


////////////////////////       Leave Routes /////////////////////////////

router.post("/auth/create-leave", generateLeaveController);

router.get("/auth/get-leave", getLeaveController);

router.delete("/auth/delete-leave/:id", deleteLeaveController);

router.put("/auth/update-leave/:id", updateLeaveController);



module.exports = router;

