const express = require('express')();
const proxy = require('http-proxy-middleware');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  express.use('/auth', proxy({ target: 'http://localhost:3030', changeOrigin: true }));

  express.all('*', (req, res) => {
    const nextRequestHandler = app.getRequestHandler();
    return nextRequestHandler(req, res);
  });

  express.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
