const express = require( 'express' );
const dotenv = require( 'dotenv' );

const twilio = require( 'twilio' )( process.env.twilio_accid, proces.env.twilio_token );

const router = express.Router();

router.route( '/sms' )
  .post( ( req, res ) => {
    //let OTP = getOTP( number ) || 0000;
    twilio.messages
      .create( {
        to: '+15558675310',
        from: '+15017122661',
        body: ( OTP || 00 ) + ' is your OTP for Authentic8',
      } )
      .then( message => console.log( message.sid ) );
  } );


module.exports = router;
