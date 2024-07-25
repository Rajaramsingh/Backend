// import http from 'http' ;

let http = require("http");

let fs = require("fs");

console.log("starting server");

http
   .createServer((req, res) => {
   fs.readFile('response.html',(err,data) => {
    if(!err){
        res.writeHead(200, {
            "Content-Type":"text/html",
        })
        res.write(data);
        return res.end()
    }
    res.write("error while reading file");
    return res.end();
   })
    
   })
    .listen(3000);