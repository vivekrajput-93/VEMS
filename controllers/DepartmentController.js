const Department = require("../models/departmentModel");

//////////////////////        Department Creation Conroller ////////////////////

const createDepartmentController = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.send({ message: "Department Name is required!" });
    }

    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) {
      return res.status(401).send({
        success: false,
        message: "Department Already exists",
      });
    }

    const Departments = await Department.create({ name, description });
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

//////////////////////    Fetch all department ////////////////////

const getDepartmentController = async (req, res) => {
  try {
    const department = await Department.find({});
    return res.status(200).send({
      success: true,
      message: "Fetched department successfully",
      department,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching the department",
      err: error,
    });
  }
};

////////////////////////////    Update Controller  ///////////////////////

const updateDepartmentController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateDept = await Department.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Updated Department Successfully",
      updateDept,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Department Controller",
      err: error,
    });
  }
};


//////////////////////////   Delete Controller ///////////////////////////

const deleteDepartmentController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDept = await Department.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Department Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Department Controller",
      err: error,
    });
  }
};

module.exports = {
  createDepartmentController,
  getDepartmentController,
  deleteDepartmentController,
  updateDepartmentController,
};
