require('./database/index');
const path = require('path')
require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/userRoute');
const standardRoute = require('./routes/standard');

const PORT = process.env.PORT

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/', standardRoute);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log('Server Running on Port', PORT)
})