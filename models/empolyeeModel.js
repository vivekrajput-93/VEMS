const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema( {

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    hiredDate: {
         type: Date, 
         default: Date.now 
    },
    departmentId : {
        type : mongoose.ObjectId,
        ref : 'Department',
        required : true
    },
    status: {
        type: String,
        enum: ['active', 'on leave', 'terminated'], 
        default: 'active' 
      }

})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;