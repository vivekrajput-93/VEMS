const mongoose = require("mongoose");


const leaveSchema = new mongoose.Schema({
    employeeId : {
        type : mongoose.ObjectId,
        ref : "Employee",
        required : true
    },
    leaveType : {
        type : String,
        default : "Casual Leave",
        enum : ['Casual Leave', 'Medical Leave', 'LOP']
    },
    from : {
        type: Date,
        required : true
    },
    to : {
        type : Date,
        required : true
    },
    reason : {
        type : String,
        required : true
    },
    noOfDays : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : "New",
        enum : ['New', 'Pending', 'Approved', 'Declined']
    }
    
})


const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave; 