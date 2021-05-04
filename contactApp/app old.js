const yargs = require('yargs')
// ambil argument dari command line
// console.log(process.argv);

// const command = process.argv[2];
// if (command == 'add') {
    
// } else if (command == 'remove') {
    
// } else if (command == 'list') {

// }

console.log(yargs.argv);

// // require file contacts.js
// const contacts = require('./contacts')

// // fungsi utama
// // karena menggunakan asynchronous, maka gunakan await
// const main = async () => {
//     // menangkap nilai dari tiap-tiap pertanyaan
//     // const nama = await pertanyaan1()
//     // const email = await pertanyaan2()
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda: ')
//     const email = await contacts.tulisPertanyaan('Masukkan email anda: ')
//     const nohp = await contacts.tulisPertanyaan('Masukkan No Hp anda: ')

//     contacts.simpanContact(nama, email, nohp)
// }

// main()