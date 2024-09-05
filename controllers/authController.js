const User = require("../models/authModel.js");
const { hashPassword } = require("../helper/authHelper");


///////////////////////////     Register Controller ///////////////////////

const registerController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate input
    if (!username) {
      return res.status(400).send({ message: "Username is required!" });
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

module.exports = {
  registerController
};
