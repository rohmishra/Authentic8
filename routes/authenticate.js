const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();

router.route('/login')
  .get( (req,res) => {
    res.render('login');
  });

router.route('/qrcode')
.get( (req,res) =>{
  res.render('scan', {
    version: process.env.APPVERSION,
    env: process.env.ENV
  });
})
module.exports = router;
