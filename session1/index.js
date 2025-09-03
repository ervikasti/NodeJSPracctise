// import the first module
const http = require('node:http');

// createa a port where server will listen
const PORT = 8081;

// create a server
const server = http.createServer((req,res)=>{
    // will look at how to add path (/)
    const path = req.url;
    //Will look at different request type
    const method = req.method;
    if(path === "/"){
        if(method !== 'GET'){
            res.writeHead(405,{'Content-Type':'text/html'});
            res.write('<h1> 405: Method Not Allowed </h1>');
            res.end();
        }else{
            res.writeHead(200,{'content-Type': 'text/html'});
            res.write('<h1> Hello you are on / path</h1>');
            res.end();}
    }else if(path==='/sell'){
        if(method !== 'POST'){
            res.writeHead(405,{'Content-Type':'text/html'});
            res.write('<h1> 405: Method Not Allowed </h1>');
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`Thanks for reaching out `);
            res.write('<h2>You Order on the way</h2>');
            res.end();
        }
    }


})

// Binding the server to a port
server.listen(PORT, () => {
    console.log(`Server is listening on:  ${PORT}`);
});