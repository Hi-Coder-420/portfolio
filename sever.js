const express = require('express');

const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write();
    res.end()
  }

  else{
    res.write('other')
    res.end();
  }
})
