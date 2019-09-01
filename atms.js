const atms_source = require('./atms_source')

module.exports = ({ banco, red }) => atms_source
    .filter(atm => (banco ? atm.banco === banco : true))
    .filter(atm => (red ? atm.red === red : true))