const sequelize = require('sequelize');

const connection = require('../database/database');

const produto = connection.define(
    'tbl_produto',
    {
        nome_produto:{
            type: sequelize.STRING,
            allowNull: false
        },
        numserie_produto:{
            type: sequelize.STRING,
            allowNull: false
        },
        marca_produto:{
            type: sequelize.STRING,
            allowNull: false
        },
        modelo_produto:{
            type: sequelize.STRING,
            allowNull: false
        },
        quantidade_produto:{
            type: sequelize.INTEGER,
            allowNull:false
        },
        valor_produto:{
            type: sequelize.FLOAT,
            allowNull:false
        }
    }
);

//produto.sync({force:true});

module.exports = produto;