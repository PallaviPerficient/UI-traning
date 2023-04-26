var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Image Uploader</h2>')
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input style="color:green; padding:20px;" type="file" name="filetoupload"><br>');
    res.write('<input style="color:blue; margin:20px; height:26px;" type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);