const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/about')
    {
        res.end('you are in about page');
    }
    if(req.url==='/error'){
        res.end(`
        <h1>Error!</h1>
        <p>Page seem to be missing</p>
        <a href='/'>return home</a>
        `)
    }
    if(req.url==='/')
    {
        res.end('Homepage');
    }
})

server.listen(5000);