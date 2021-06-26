const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routers/posts');
const userRoute = require('./routers/users');
const herbRoute = require('./routers/herbs');
const doctorRoute = require('./routers/doctors');
const treatmentRoute = require('./routers/treatments');
const historyRoute = require('./routers/histories');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/posts',postRoute);
app.use('/user',userRoute);
app.use('/herb',herbRoute);
app.use('/doctor',doctorRoute);
app.use('/treatment',treatmentRoute);
app.use('/history',historyRoute);

//Middlewares

//ROUTES
app.get('/',(req,res) => {
    res.send('we are on home');
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true },() => 
    console.log('connnect to DB!')
);

app.listen(3000);