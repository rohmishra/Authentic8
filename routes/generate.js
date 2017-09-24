const express = require('express');
var QRCode = require('qrcode')

const router = express.Router();

router.route('/getcode/:id').get((req,res) => {

 let url = QRCode.toDataURL(req.params.id, (err, url) => {
   return url;
 })
  res.json({
    application_name: 'test', //replace with app name from database.
    user_id: '1001',  //TODO replace with user name from database.
    code: req.params.id,
    qrcode: url
  })
})

module.exports = router
