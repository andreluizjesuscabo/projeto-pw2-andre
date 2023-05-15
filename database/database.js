const sequelize = require('sequelize');

const connection = new sequelize(
    'api_loja_celular',
    'root',
    '',
    {
        host:'localhost',
        port:'3306',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;