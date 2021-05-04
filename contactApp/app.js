const yargs = require('yargs')
const contacts = require('./contacts')

// yargs.command('add', 'Menambahkan contact baru', () => { }, (argv) => {
//     console.log(argv.nama);
// })
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        // --> option / validasi dari yargs
        nama: {
            describe: "Nama Lengkap",
            // harus diisi jika true
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Alamat Email',
            type: 'string'
        },
        nohp: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.nohp)
    }
    // demanCommand is required
}).demandCommand()

// menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    // ketika function ini dipanggil kita akan menjalankan function listContact di contacts.
    handler() {
        contacts.listContact()
    }
})

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama)
    }
})

// menghapus suatu contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})

yargs.parse()