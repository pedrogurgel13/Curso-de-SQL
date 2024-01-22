const Sequelize = require('sequelize')

const sequelize = new Sequelize("clientes", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate() // Apensa para desenvolvimento
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
})

module.exports = sequelize