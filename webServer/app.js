
const http = require('http')
const fs = require('fs')
const port = 3000

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    const url = req.url;
    if (url === '/about') {
        res.write('<h1>Ini adalah halaman about</h1>');
        res.end();
    } else if (url === '/contact') {
        res.write('<h1>Ini adalah halaman contact</h1>');
        res.end();
    } else {
        // res.write('<h1>Hello World!</h1>')
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    res.write('Hello World!');
    res.end();
}).listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})