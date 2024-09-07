const User = require("../models/authModel.js");
const { hashPassword, comparePassword } = require("../helper/authHelper");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/ServerConfig.js");


///////////////////////////     Register Controller ///////////////////////

const registerController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate input
    if (!username) {
      return res.status(400).send({ message: "username is required!" });
    }
    if (!email) {
      return res.status(400).send({ message: "Email is required!" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password is required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        message: "User already exists!",
        success: false,
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || 0 // Default to role 0 if not provided
    });

    // Respond with success
    return res.status(201).send({
      success: true,
      message: "User is registered successfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "There was an error during registration.",
      error,
    });
  }
};



///////////////////////////       Login Controller /////////////////////////////////

const loginController = async (req, res) => {
  try {
    const {email, password} = req.body


    if(!email|| !password) {
      return res.status(400).send({
        message : "Wrong Credientials",
        success : false
      })
    }

    const user = await User.findOne({email})
    if(!user) {
      return res.status(404).send({
        success : false,
        message : "User is not Registered, please singup"
      })
    }

    const match = await comparePassword(password, user.password);
    if(!match) {
      return res.status(200).send({
        message : "Invalid Password",
        success : false
      })
    }

    const token = await jwt.sign({ _id : user.id}, JWT_SECRET, { expiresIn : "7D"});

    res.status(200).send({
      success : true,
      message : "Login Successfull",
      user : {
        user : user.username,
        email : user.email,
        role : user.role
      },
      token
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success : false,
      message : "Failed to Login the User",
      err : error
    })
  }
}







module.exports = {
  registerController, loginController
};
