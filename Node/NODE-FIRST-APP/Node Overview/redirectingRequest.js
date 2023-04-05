const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Rediecting Request</title></head>');
        res.write('<body><h1>Routing Response</h1><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('Hello.txt',"Requesting Request");
        res.write('<html>')
        res.write('<head><titleRediecting Request</title></head>');
        res.write('<body><h1>Message Added</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>')
    res.write('<head><title>Rediecting Request</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
})

server.listen(8000)