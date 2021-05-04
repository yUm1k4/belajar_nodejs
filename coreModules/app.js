/*
* Core Modules
*/

/*
* File System
*/
// panggil module nya
const fs = require('fs');
// console.log(fs);

/*
* Menulis file (write)
*/
// // menulis string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!')
// } catch (error) {
//     console.log(error);
// }

// // menulis string ke file (asynchronous)
// ada callback 
// fs.writeFile('data/test.txt', 'Hello world secara Asynchronous', (error) => {
//     console.log(error);
// })


/*
* Membaca File (Read)
*/
// // membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data);

// // membaca isi file (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8' , (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


/*
* Readline
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //apa yg dilakukan di terminal
    output: process.stdout 
});

// buat pertanyaan,
// lalu ditampung didalam callback
rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan nomor hp anda: ', (nohp) => {
        const contact = {
            nama,
            nohp
        }
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        // ubah string menjadi json dengan JSON.parse()
        const contacts = JSON.parse(file)

        // objeck masuk ke dalam array
        contacts.push(contact)

        // contacts sekarang bentuknya json,
        // sedangkan file data/contacts.json nerimanya string
        // jadi sekarang json jadiin string dengan JSON.stringify()
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4))

        console.log(`Terimakasih ${nama}, data sudah masuk.`);
        rl.close()
    })
})