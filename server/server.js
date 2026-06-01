const express = require("express");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.get("/", (req, res) => {
    res.send("User Management Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});