'use strict';
const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodeString = eng.encode("Don't Panic!");
let decodeString = eng.decode(encodeString);

console.log('Encoded: ', encodeString);
console.log('Decoded: ', decodeString);

let qr = eng.qrgen('http://www.npmjs.com', "outIMage.png");

qr ? console.log('QR Code Created') : console.log('QR failed');
