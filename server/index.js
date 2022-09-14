const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let body = '';
    req.on('data', res => {
        // console.log(res);
        body += res;
    })
    req.on('end', () => {
        console.log(JSON.parse(body));
    })
    res.end("hello world!")
})

server.listen(80, '0.0.0.0', () => {
    console.log('80端口服务启动~');
})