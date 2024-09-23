const Job = require("../models/desingationModel");



////////////////////////////     Creating the Jobs   ///////////////////////////

const createJobController = async (req, res) => {
   try {
     const { departmentId, jobName } = req.body;
     if (!departmentId) {
       res.send({ message: "DepartmentId is required !" });
     }
     if (!jobName) {
       res.send({ message: "Job Name is required !" });
     }

     const exitstingJob = await Job.findOne({ jobName });
     if (exitstingJob) {
       return res.status(200).send({
         message: "Job already exists, try New Designation",
         success: false,
       });
     }

     const newJob = new Job({ departmentId, jobName });
     await newJob.save();
     return res.status(200).send({
       success: true,
       message: "Job is created Successfully",
       newJob,
     });
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error in Job Controller",
       err: error,
     });
   }
 };

// //////////////////////////////    Fetching all the Job //////////////////////

 const getJobController = async (req, res) => {
   try {
     const job = await Job.find({});
     return res.status(200).send({
       success: true,
       message: "Fetched all the job Successfully",
       job,
     });
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error in Job Controller",
       err: error,
     });
   }
 };

// ///////////////////////////////    Updating the job //////////////////////////

 const updateJobController = async (req, res) => {
   try {
     const { id } = req.params;
     const { departmentId, jobName } = req.body;
     const job = await Job.findByIdAndUpdate(
       id,
       { departmentId, jobName },
       { new: true }
     );
     return res.status(200).send({
       success: true,
       message: "Updated the Job Successfully",
       job,
     });
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Error in Job Controller",
       err: error,
     });
   }
 };

// //////////////////////////   Deleting the job ////////////////////////////////

 const deleteJobController = async(req, res) => {
    try {
        const {id} = req.params;
        await Job.findByIdAndDelete(id);
        return res.status(200).send({
            success : true,
            message : "Deleted Job Successfully",
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Job Controller",
            err : error
        })
    }
}


 module.exports = {
   createJobController,
   getJobController,
   updateJobController,
   deleteJobController
};
