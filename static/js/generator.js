/*
 ******************!!WARNING!!******************
 ** This file will change significantly in future as
 ** actual logic will be implemented. This fill currently
 ** is just a stub to be used to trigger qrcode generation.
 */

/*
 ** Author: Rohan Mishra
 ** version: v0.0.3
 ** description: stub for qrcode test.
 */

let codeHolder = document.getElementById( 'qrcode' );

// TODO: GET code from server.
let baseURL = 'https://authentic8-testdb-server.herokuapp.com/';
let serviceURL = baseURL + 'api/get_code';
console.log( document.cookie.split );
let appid = '5aded9ec734d1d0b3c2f3cec'; // Get dynamically from post request to page in future.
let sessionid = 0001; // Get dynamically from post request to page in future.
let appkey = document.cookie.valueOf( 'key' ) || '579823yr3uwey';

let data = {
  appid: appid,
  key: appkey
}
fetch( serviceURL, {
    body: JSON.stringify( data ),
    method: 'POST',
    headers: new Headers( {
      'Content-Type': 'application/json'
    } )
  } )
  .then( function ( response ) {
    response.text()
      .then( function ( text ) {
        console.log( text );
        qrcodelib.toCanvas( codeHolder, text, err => {
          if ( err ) {
            console.error( err )
          } else {
            console.log( "Done. Value: " + text )
          }
        } )
      } );
  } );
// .then( res => {
//   if ( res.ok ) {
//     return res.text();
//   } else {
//     return null;
//   }
// } )
// .then( res => {
//   if ( res ) {
//   } else {
//     console.error( "UNABLE TO FETCH" );
//     console.log( res );
//   }
// } )
// .catch( error => console.error( 'Error:', error ) )
