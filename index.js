const http = require("http");

const server =  http.createServer((req, res)=> {
    res.writeHead(200);
    res.end("Hello world");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server listening on port 3000")
});