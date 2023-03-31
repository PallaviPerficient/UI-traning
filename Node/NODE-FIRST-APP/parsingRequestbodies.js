const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Parsing Request</title></head>');
        res.write('<body><h1>Parsing Request Bodies</h1><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data' ,(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message =parsedBody.split('=')[1];
            fs.writeFileSync('Hello.txt',message);
        })
        // fs.writeFileSync('Hello.txt',"Requesting Request");
        res.write('<html>')
        res.write('<head><titleParsing Request</title></head>');
        res.write('<body><h1>Message Added</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>')
    res.write('<head><title>Parsing Request</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
})

server.listen(8000)