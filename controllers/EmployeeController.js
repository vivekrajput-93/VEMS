const Employee = require("../models/empolyeeModel");

const createEmployeeController = async (req, res) => {
  try {
    const {
      
      firstName,
      lastName,
      email,
      phone,
      hiredDate,
      departmentId,
      status,
      position,
    } = req.body;
    switch (true) {

      case !firstName:
        return res.status(500).send({ error: "First Name is required !" });
      case !lastName:
        return res.status(500).send({ error: "Last Name is required!" });
      case !email:
        return res.status(500).send({ error: "email is required!" });
      case !phone:
        return res.status(500).send({ error: "phone is required" });
      case !departmentId:
        return res.status(500).send({ error: "departmentId is required" });
      case !position:
        return res.status(500).send({ error: "position is required" });
      case !hiredDate:
        return res.status(500).send({ error: "Date of hiring is required" });
      case !status:
        return res.status(500).send({ error: "status is required" });
    }
    const employee = {
      firstName,
      lastName,
      position,
      email,
      phone,
      status,
      departmentId,
      hiredDate,
    };

    const employees = new Employee({firstName, lastName, email, position, status, phone, departmentId, hiredDate});
    await employees.save();
    res.status(200).send({
      success: true,
      message: "Employee created Successfully",
      employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Employee Controller",
      error: error.message,
    });
  }
};



module.exports = {
    createEmployeeController
}