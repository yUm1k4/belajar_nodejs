// const cetakNama = (nama) => `Hi, nama saya ${nama}.`
function cetakNama(nama) {
    return `Hi, nama saya ${nama}.`
}

const PI = 3.14

// bisa mengirim object
const mahasiswa = {
    nama: 'Zain',
    umur: 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`
    }
}

// bisa mengirim class
class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}

// console.log(cetakNama);

// // export beberapa modul
// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang

// export banyak module sekaligus
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// -->atau bahkan jika pakai notasi ES6, kalo property dan value nya sama cukup tulis satu saja
module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
}