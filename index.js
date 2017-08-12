// ***require / import***
const path = require('path');
const express = require('express');
const qrcode = require('qrcode');
const dotenv = require('dotenv');
const authenticate = require('./routes/authenticate');

// ***INIT***
// starting express
const app = express();
// set static content location
app.use(express.static(path.join(__dirname,'static')))
// Load .env
dotenv.load();
// View engine (pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

console.log(process.env.APPVERSION);

// ***routes***
app.get('/', (req,res) => {
  res.render('index', {
    version: process.env.APPVERSION,
    env: process.env.ENV
  });
})

app.use('/userservices', authenticate)

// ***start listening***
app.listen(3000, _ => {
  console.log('Authentic8 started on port 3000')
})
