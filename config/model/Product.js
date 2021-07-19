const Sequelize = require('sequelize')
const database = require('../database/db')

const product = database.define('product', {
  idProduct: { type: Sequelize.INTEGER, primaryKey: true },
  nama: Sequelize.STRING,
  category: Sequelize.STRING,
  qty: Sequelize.INTEGER,
  price: Sequelize.STRING
}, {
  freezeTableName: true,
  timestamps: false
})

product.removeAttribute('id')

module.exports = product