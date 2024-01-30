const express = require("express");
const router = new express.Router();
const User = require("../models/user");

// Routes

router.post("/registeruser", async (req, res) => {
    let user;
    user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }) 
    try {
        await user.save();
        res.status(201).send({message: "Registered user"});
    } catch (e) {
        res.status(400).send({message: "User could not be registered"});
    }
})

module.exports = {
    userRouter: router
}