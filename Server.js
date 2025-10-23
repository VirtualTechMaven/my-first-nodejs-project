import http from 'http';
import express from 'express';
import { getAllPosts, getPostById } from './postcontroller.js';

const Port = process.env.Port || 3000;

const server = http.createServer((req, res) => {  
   res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to My First Node.js Project</h1>');
    res.write('<h2>About Me:</h2>');
    res.write('<p>My name is Chioma Princess Ohwo, and I am learning Node.js to build server-side applications.</p>');
    res.write('<h2>Posts:</h2>');

    console.log(req.url);
    console.log(req.method);

    const posts = getAllPosts();
    res.end();
});
    
//server.listen(Port, () => {
    //console.log(`Server is running on http://localhost:${Port}`);