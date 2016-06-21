'use strict';
const qr = require('qr-image');
const fs = require('fs');

//node qr "encode this string" "qr-image.png"

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

console.log("Please Add WebUrl and the type of image to output");

if(dataToEncode !== null && outImage !== null) {
    qr.image(dataToEncode, {
        type: 'png',
        size: 20
    }).pipe(fs.createWriteStream(outImage));
    console.log('Image Generated')
}else{
    console.log('PLease check Command Line Args');
}
