const atms = require('./atms')
const distinct = (value, index, self) => self.indexOf(value) === index

module.exports = atms
    .map(atm => atm.banco)
    .filter(distinct)
    .sort()