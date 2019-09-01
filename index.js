const express = require('express');
const redes = require('./redes')
const bancos = require('./bancos')
const atms = require('./atms')
const app = express();

app.get('/', (req, res) => res.json({
  name: 'ATM api',
  version: '1.0.0',
  uptime: `${Math.floor(process.uptime())} s`
}));

app.get('/redes', (req, res) => res.json(redes));
app.get('/bancos', (req, res) => {
  const { red } = req.query
  return res.json(bancos({ red }))
});

app.get('/atms', (req, res) => {
  const { red, banco } = req.query
  return res.json(atms({ red, banco }))
});

port = process.env["PORT"] || 3333
app.listen(port, () => console.log(`ATM api listening at port ${port}...`));