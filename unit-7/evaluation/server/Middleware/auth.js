const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require("../Model/useModel") 

const auth = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const newObject = jwt.verify(token, "sajju");
        const userExists = await UserModel.findOne({ email: newObject.email }); 

        if (userExists) {
            next();
        } else {
            res.send('User does not exist');
        }
    } catch (error) {
        res.send(error.message); 
    }
};

module.exports = auth;
