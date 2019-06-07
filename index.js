const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    // htmlフォルダを読み込み
    let url = 'htmldir' + req.url;
    if (fs.existsSync(url)){
        fs.readFile(url, (err, data) => {
            if(!err){
                console.log(`[${new Date()}]_${url}`);
                res.writeHead(200, {"content-Type":"text/html"});
                res.end(data);
            }
        });
    }
});

server.listen(5000);
console.log(`[${new Date()}]_localhost:5000_Server running`);
