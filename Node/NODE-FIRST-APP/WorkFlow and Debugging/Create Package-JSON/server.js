const http = require('http')
const server = http.createServer((req,res) =>{
    console.log(req);
    res.write('<html><body><h1>Create Package JSON</h1></body></html>')
})
server.listen(4000)