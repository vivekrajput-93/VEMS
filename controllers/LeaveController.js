const Leave = require("../models/leaveModel");


const generateLeaveController = async(req, res) => {
    try {
        const  {employeeId, leaveType, from, to, reason, noOfDays, status } = req.body;
        if(!employeeId) {
            return res.send({ message : "EmployeeId is required"});
        }
        if(!employeeId) {
            return res.send({ message : "EmployeeId is required"});
        } if(!leaveType) {
            return res.send({ message : "Leave Type is required"});
        } if(!from) {
            return res.send({ message : "From Date is required"});
        }  if(!to) {
            return res.send({ message : "To Date is required"});
        } if(!reason) {
            return res.send({ message : "Reason is required"});
        } if(!noOfDays) {
            return res.send({ message : "No of Days is required"});
        } if(!status) {
            return res.send({ message : "Status is required"});
        }

        const leave = await Leave.create({employeeId, leaveType, from, to, reason, noOfDays, status});
        return res.status(200).send({
            success : true,
            message : "Leave Created Successfully",
            leave
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Leave Controller",
            err : error
        })
    }
}


module.exports = {
    generateLeaveController
}