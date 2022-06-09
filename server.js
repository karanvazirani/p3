
const fastify = require("fastify")();
const {coinCount} = require('./p3-module.js');
const http = require('http');
const fs = require('fs');
const port = 8080;
fastify.get("/", (req, res) => {
fs.readFile(`${__dirname}/index.html`, (err, data) => {
if (err) {
console.log(err);
res.statusCode = 500;
res.setHeader('Content-Type', 'text/html');
res.end("Error processing request");
} else {
res.statusCode = 200;
console.log("URL: ", req.url);
res.header('Content-Type', 'text/html');
res.send(data);
res.end();
};
});
});

fastify.get("/coin", (option) => { 
coinCount()


  let denom = req.query.denom;
  let count = req.query.count;
  denom ? denom : '0'
  count ? count : '0'
  parseInt(denom);
  parseInt(count);
  console.log(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
});

fastify.get("/coins", (denom, count) => { 
  coinCount();
  coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
});
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
