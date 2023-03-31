const http = require('http')
const server = http.createServer((req , res) =>{
    const url = req.url;
    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Routing Request</title></head>');
    res.write('<body><h1>Routing Response</h1><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    res.write('<html>')
    res.write('<head><title>Routing Request</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
})
server.listen(5000);