const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./Router/userrouter');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/assignment8')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.log('MongoDB connection failed:', error);
    });

app.use('/api', userRouter);

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
