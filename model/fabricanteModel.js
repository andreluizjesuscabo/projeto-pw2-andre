const sequelize = require('sequelize');

const connection = require('../database/database');

const fabricante = connection.define(
    'tbl_fabricante',
    {
        nome_fabricante:{
            type: sequelize.STRING,
            allowNull: false
        },
        cep_fabricante:{
            type: sequelize.STRING,
            allowNull: false
        },
        cnpj_fabricante:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//fabricante.sync({force:true});

module.exports = fabricante;