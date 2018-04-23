const express = require( 'express' );
var QRCode = require( 'qrcode' )

const router = express.Router();

router.route( '/getcode/:id' )
  .get( ( req, res ) => {
    console.log( `using id: ` + req.params.id );
    QRCode.toDataURL( req.params.id )
      .then( url => {
        console.log( url )
        res.json( {
          application_name: 'test', //replace with app name from database.
          user_id: '1001', //TODO replace with user name from database.
          code: req.params.id,
          qrcode: url
        } )
      } )
      .catch( err => {
        console.error( err )
      } )
  } )

router.route( '/' )
  .get( ( req, res ) => {
    res.json( {
      message: `Nothing here. Please use a proper path`,
      error: `500/200`,
      application: false,
      base_path: `/api/`,
      app_path: `server://api`,
      url: 'localhost:8120/api'
    } )
  } )

module.exports = router
