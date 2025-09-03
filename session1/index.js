// import the first module
const http = require('node:http');

// createa a port where server will listen
const PORT = 8081;

// create a server
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Hello I am listening on port ${PORT}`);
    res.end();
})

// Binding the server to a port
server.listen(PORT, () => {
    console.log(`Server is listening on:  ${PORT}`);
});