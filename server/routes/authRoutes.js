
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [];

router.post("/register", (req, res) => {

    users.push(req.body);

    console.log(users);

    res.status(201).json({
        message: "User registered successfully"
    });

});

router.get("/users", (req, res) => {

    res.json(users);

});
router.delete("/users/:index", (req, res) => {

    const index = req.params.index;

    users.splice(index, 1);

    res.json({
        message: "User deleted"
    });

});
router.post("/login", (req, res) => {

    const { email } = req.body;

    const token = jwt.sign(

        {
            email: email,
            role: "USER"
        },

        "xebia-secret-key",

        {
            expiresIn: "1h"
        }

    );

    res.json({
        token
    });

});
module.exports = router;