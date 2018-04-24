const express = require( 'express' );
const dotenv = require( 'dotenv' );
const bodyParser = require( 'body-parser' );
const router = express.Router();

// parse incoming requests
router.use( bodyParser.json() );
router.use( bodyParser.urlencoded( { extended: false } ) );

router.route( '/login' )
  .get( ( req, res ) => {
    res.render( 'login' );
  } );

router.route( '/register' )
  .get( ( req, res ) => {
    res.render( 'login' );
  } );

router.route( '/qrcode' )
  .post( ( req, res ) => {
    console.log( req.body.key );
    res.cookie( 'key', req.body.key );
    res.render( 'scan', {
      version: process.env.APPVERSION,
      env: process.env.ENV
    } );
  } )
module.exports = router;
