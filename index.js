const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    console.log("runnnign very smooth");
    res.status(200).send("sommmmt");
});
app.use("/auth", authRoutes);
app.listen(port, () => {
    console.log(` backends server is runnnig on port ${port}`);
});
