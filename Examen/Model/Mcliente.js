'use strict'
var Sequelize = require('sequelize');
var cx = require('../Config/DBconect.js');

var Cliente = cx.sequelize.define('cliente', {
    id_cliente: {
		primaryKey:true,
		type:Sequelize.INTEGER,
		autoIncrement:true
	},
    nombres:Sequelize.STRING,
    apellidos:Sequelize.STRING,
    direccion:Sequelize.STRING,
    fecha_nacimiento:Sequelize.STRING,
    telefono:Sequelize.STRING,
    email:Sequelize.STRING
});

module.exports.Cliente = Cliente;