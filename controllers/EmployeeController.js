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

    const employees = new Employee({
      firstName,
      lastName,
      email,
      position,
      status,
      phone,
      departmentId,
      hiredDate,
    });
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

const getEmployeeController = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).send({
      success: true,
      message: "Employee fetched successfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting employee",
      err: error,
    });
  }
};

const deleteEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Employee Controller",
      err: error,
    });
  }
};

const updateEmployeeController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      position,
      phone,
      hiredDate,
      departmentId,
      status,
    } = req.body;
    const employees = await Employee.findByIdAndUpdate(
       id ,
      { firstName, lastName, email, position, hiredDate, phone, status, departmentId },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Updated Employee Successfully",
      employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Employee Controller",
      err: error,
    });
  }
};

module.exports = {
  createEmployeeController,
  getEmployeeController,
  deleteEmployeeController,
  updateEmployeeController,
};
