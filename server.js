const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/ServerConfig.js");
const connectDb = require("./config/db.js");
const apiRoutes = require("./routes/index");

const app = express();


app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Route connection
app.use("/api", apiRoutes);

// Database connection
connectDb();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
