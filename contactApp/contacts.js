
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

const dirPath = './data';
// jika directorynya nggk ada
if (!fs.existsSync(dirPath)) {
    // buat direktori tersebut
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contacts.json';
// buat file contacts.json jika belum ada
if (!fs.existsSync(dataPath)) {
    // lalu tentukan default array kosong dan utf-8
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    // ubah string menjadi json dengan JSON.parse()
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const simpanContact = (nama, email, nohp) => {
    const contact = {nama, email, nohp}
    const contacts = loadContact()

    /*
    * Validasi start
    */
    // cek nama jika ada yg duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    // jika ada isinya / true
    if (duplikat) {
        console.log(chalk.black.bgRed('Mohon maap, Contact sudah terdaftar, silahkan gunakan nama yang lain.'))
        return false
    }
    // cek email jika ada
    if (email) {
        // jika bukan email
        if (!validator.isEmail(email)) {
            console.log(chalk.black.bgRed('Mohon maap, alamat email Anda tidak valid.'))
            return false
        }
    }
    // jika bukan nohp
    if (!validator.isMobilePhone(nohp, 'id-ID')) {
        console.log(chalk.black.bgRed('Mohon maap, nomor HP Anda tidak valid.'))
        return false
    }
    /*
    * Validasi end
    */

    // objeck masuk ke dalam array
    contacts.push(contact)

    // contacts sekarang bentuknya json,
    // sedangkan file data/contacts.json nerimanya string
    // jadi sekarang json jadiin string dengan JSON.stringify()
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 4))

    // pesan success nya
    console.log(chalk.black.bgGreen(`Terimakasih ${nama}, data sudah masuk.`))
}

// Function untuk melihat list/daftar contact
const listContact = () => {
    const contacts = loadContact()
    
    console.log(chalk.black.bgCyan(`Daftar contact : `))
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.nohp}`);
    });
}

// Function untuk detail contact
const detailContact = (nama) => {
    const contacts = loadContact()

    // cari contacts di dalam JSON nya
    // toLowerCase() utk huruf kecil
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if (!contact) {
        console.log(chalk.black.bgRed(`Mohon maap, ${nama} tidak ditemukan.`))
        return false
    }

    console.log(chalk.black.bgCyan(contact.nama))
    console.log(contact.nohp)
    if (contact.email) {
        console.log(contact.email)
    }
}

const deleteContact = (nama) => {
    const contacts = loadContact()
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    )

    if (contacts.length === newContacts.length) {
        console.log(chalk.black.bgRed(`Mohon maap, ${nama} tidak ditemukan.`))
        return false
    }
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts, null, 4))

    // pesan success nya
    console.log(chalk.black.bgGreen(`Data contact ${nama} berhasil dihapus.`))
}

module.exports = {simpanContact, listContact, detailContact, deleteContact}