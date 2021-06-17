require('./database/index');
const path = require('path')
require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/userRoute');
const standardRoute = require('./routes/standard');
const bodyParser = require('body-parser');
const flash = require('flash');
const session = require('express-session');

const PORT = process.env.PORT

const app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(flash())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', standardRoute);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log('Server Running on Port', PORT)
})