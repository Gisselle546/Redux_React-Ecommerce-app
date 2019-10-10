const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 2000;
const mongoose = require('mongoose');
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const auth = require('./routes/auth');
const game = require('./routes/product');

app.use('/api/auth',auth);
app.use('/api/game',game);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'))
  .catch(err => console.log(err));



app.listen(port,()=>{
    console.log(`App is running at ${port}`);
})
