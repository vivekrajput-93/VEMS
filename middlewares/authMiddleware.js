const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/ServerConfig");
const User = require("../models/authModel.js");

///////////////////////////    Routes access Protection //////////////////////

const requiredSignIn = async (req, res, next) => {
  try {
    const decode = await jwt.verify(req.headers.authorization, JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/////////////////////////////      Admin Middlewarevvvvv ///////////////////////////

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      res.status(401).send({
        message: "UnAuthorised Access",
        success: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in admin middlware",
      error,
    });
  }
};

module.exports = {
  requiredSignIn,
  isAdmin,
};
