const http=require('http');
//import http from  'http';
import fs from 'fs';
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write(`<h1>Employee Details</h1>`);
        res.write(`<button onClick="/addEmployee">Add Employee</button>`)
    }
    else if(req.url==="/addEmployee")
    {
        res.write(`<h1>Add Employee Page</h1>`);
    }
    res.end();
})
server.listen(6677);
console.log("Please Check Server working on 6677 port"); 