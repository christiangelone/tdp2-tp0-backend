const express = require('express');
const redes = require('./redes')
const bancos = require('./bancos')
const atms = require('./atms')
const app = express();

app.get('/redes', (req, res) => res.json(redes));
app.get('/bancos', (req, res) => res.json(bancos));

app.get('/atms', (req, res) => {
  const red = req.query.red
  const banco = req.query.banco
  if(!red && !banco) return res.json(atms);
  if(red && !banco) return res.json(atms.filter(atm => atm.red === red))
  if(banco && !red) return res.json(atms.filter(atm => atm.banco === banco))
  if(banco && red) return res.json(atms.filter(atm => atm.red === red && atm.banco === banco))
});

port = process.env["PORT"] || 3333
app.listen(port, () => console.log(`ATM api listening at port ${port}...`));