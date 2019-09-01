const atms = require('./atms')
const distinct = (value, index, self) => self.indexOf(value) === index

module.exports = ({ red }) => atms
    .filter(atm => (red ? atm.red === red : true))
    .map(atm => atm.banco)
    .filter(distinct)
    .sort()