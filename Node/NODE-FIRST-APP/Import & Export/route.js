const requestHandler = (req,res) =>{
    const url = req.url;
    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Routing</title></head>');
    res.write('<body><h1>Routing</h1><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    res.write('<html>')
    res.write('<head><title>Routing</title></head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
}
// export have two  type
exports.handler= requestHandler;
//OR

// module.exports ={
//     handler:requestHandler
// }