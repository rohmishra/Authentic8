// ***require / import***
const path = require( 'path' );
const express = require( 'express' );
const qrcode = require( 'qrcode' );
const dotenv = require( 'dotenv' );
const authenticate = require( './routes/authenticate' );
const api_generate = require( './routes/generate' );
const cors = require( 'express-cors' );

// ***INIT***
// starting express
const app = express();
// set static content location
app.use( express.static( path.join( __dirname, 'static' ) ) )
// Load .env
dotenv.load();
// View engine (pug)
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

app.use( cors() )
//  {
//   allowedOrigins: [
//         'authentic8-ui.herokuapp.com', 'localhost:3120', 'localhost:3110', '127.0.0.1:8887'
//     ]
// } ) )

console.log( process.env.APPVERSION );

// ***routes***
app.get( '/', ( req, res ) => {
  res.render( 'index', {
    version: process.env.APPVERSION,
    env: process.env.ENV
  } );
} )

app.use( '/userservices', authenticate );
app.use( '/api', api_generate );

// ***start listening***
app.listen( ( process.env.PORT || 3120 ), _ => {
  console.log( 'Setting up add on port ' + ( process.env.PORT || 3000 ) );
} );
