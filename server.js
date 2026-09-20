const express = require('express');
const db = require('./config/db');
const userRouter = require('./Router/userrouter');
const PORT = 5500;

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server is working');
});

app.use('/api', userRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});