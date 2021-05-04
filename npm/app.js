// console.log('Hello World!');

var validator = require('validator');
var chalk = require('chalk');
// console.log(validator.isEmail('foo@bar.com')); //=> true
// console.log(validator.isMobilePhone('08123456789', 'id-ID')); //=> true
// console.log(validator.isNumeric('08123456789a')); //=> false 

// console.log(chalk.blue('Hello world'));

const nama = 'Zainudin'
const pesan = chalk`Nama saya ${nama}, lorem, ipsum dolor {cyan.bgBlack.italic sit amet} consectutir elit ab, rem.`;

console.log(pesan);