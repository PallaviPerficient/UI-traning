const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end("Hello From the home sides");
    }else if(req.url == "/contact"){
        res.end("Hello from ContactUS Side");
    }else if(req.url == "/about"){
        res.end("Hello from about Side");
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err,data) =>{
            console.log(data);
            res.end(data);
        })
    }else{
        res.writeHead(404, {"Content-type" : "text/html "});
        res.end("<h1>404 error Page </h1>")
    }
});

server.listen(8000 , "127.0.0.1", () =>{
    console.log("Listening Port 8000");
});