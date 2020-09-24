const http = require('http')
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Oi Mundo novamente novo');
});
server.listen(port, hostname, () => {
    console.log(`Servidor sendo executado em: http://${hostname}:${port}/`);
});