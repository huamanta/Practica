'use strict'
var Sequelize = require('sequelize');
var sequelize = new Sequelize('VentaCredito', 'postgres', '123456',{
    dialect: "postgres",
    port: 5432,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        maxConnections: 5,
        maxIdleTime:30
    },
    language: 'es'
});

module.exports.sequelize=sequelize;
