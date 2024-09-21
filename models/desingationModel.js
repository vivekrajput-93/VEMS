const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
    departmentId : {
        type : mongoose.ObjectId,
        ref : "Department",
        required : true

    },
    jobName : {
        type : String,
        required : true
    }
})


const Job = mongoose.model("Job", jobSchema);
module.exports = Job;