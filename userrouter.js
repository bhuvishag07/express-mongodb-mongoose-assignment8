const express = require('express');

const userRouter = express.Router();

const User = require('../Model/userModel');

userRouter.post('/users', async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

userRouter.get('/users', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error retrieving users');
    }
});

module.exports = userRouter;