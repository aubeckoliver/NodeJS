var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
  fs.readFile('htmlFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


fs.open('txtFile.txt', 'w', function (err, file) {
  if(err) throw err;
  console.log('Saved!');
})

fs.writeFile('txtFile.txt', 'Hello', function (err) {
  if(err) throw err;
  console.log('Saved!');
});

fs.appendFile('txtFile.txt', "!" , function (err) {
  if(err) throw err;
  console.log('Saved!');
});

fs.rename('txtFile.txt', 'renamedFile.txt', function (err) {
  if(err) throw err;
  console.log('Renamed!');
});

// fs.unlink('txtFile.txt', function(err) {
//   if(err) throw err;
//   console.log("Deleted!");
// });
