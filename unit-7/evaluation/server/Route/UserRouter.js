const UserModel = require('../Model/useModel');
const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

userRouter.post('/register', async (req, res) => {
    try {
        const userExist = await UserModel.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({ err: 'User already exists' });
        }
        const hashPassword = await bcrypt.hash(req.body.password, 5);
        const newUser = new UserModel({ ...req.body, password: hashPassword });
        await newUser.save();
        res.status(200).json({ msg: "User is successfully registered" });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(400).json({ err: "An error occurred during registration" });
    }
});

userRouter.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ err: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ email: req.body.email }, "sajju", { expiresIn: '1h' });
            res.status(200).json({ msg: 'Login successful', token: token });
        } else {
            res.status(401).json({ err: 'Authentication failed' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(400).json({ err: 'An error occurred during login' });
    }
});

module.exports = userRouter;
