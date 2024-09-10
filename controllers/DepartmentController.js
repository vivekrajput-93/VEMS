const Department = require("../models/departmentModel");





//////////////////////        Department Creation Conroller ////////////////////


const createDepartmentController = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.send({ message: "Department Name is required!" });
    }
    if (!description) {
      return res.send({ message: "Description is required !" });
    }

    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) {
      return res.status(401).send({
        success: false,
        message: "Department Already exists",
        
      });
    }

    const Departments = await  Department.create({ name, description });
    return res.status(201).send({
      success: true,
      message: "Department created Successfully",
      Departments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in department Controller",
      err: error,
    });
  }
};


module.exports = {
    createDepartmentController
}