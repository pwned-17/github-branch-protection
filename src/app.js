// src/app.js - trivial HTTP server (no express dependency)
const http = require('http');

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }
    if (req.url === '/quote') {
      // simple demo quote endpoint
      const symbol = (req.headers['x-symbol'] || 'ACME').toUpperCase();
      const price = (Math.random() * 1000).toFixed(2);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ symbol, price }));
    }
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('Stock Service demo\n');
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not fouxdddxnd');
  });
}

module.exports = { createServer };
