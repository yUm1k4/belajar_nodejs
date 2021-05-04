// Node Modules
// // 3 jenis merequire /  memanggil module lain
// const fs = require('fs') // menginport core module
// const cetakNama = require('./coba') // menginport local module
// const moment = require('moment') // menginport third party module / npm module / node_modules

// menginport dari module coba
const coba = require('./coba')

// console.log(coba);
console.log(coba.cetakNama('zainudin'),
    coba.PI,
    // dapat memanggil objek dari module lain
    coba.mahasiswa.cetakMhs(),
    // dapat memanggil class dari module lain
    new coba.Orang
);