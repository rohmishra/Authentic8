/*
******************!!WARNING!!******************
** This file will change significantly in future as
** actual logic will be implemented. This fill currently
** is just a stub to be used to trigger qrcode generation.
*/

/*
** Author: Rohan Mishra
** version: v0.0.1
** description: stub for qrcode test.
*/

let codeHolder = document.getElementById('qrcode');
let codevalue = `Test Message. To be replaced.`;

qrcodelib.toCanvas(codeHolder, codevalue, err=>{
  if(err) {
    console.error(err)
  } else {
    console.log("Done. Value: " + codevalue)
  }
})
