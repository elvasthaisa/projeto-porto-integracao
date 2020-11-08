const mongoose = require('mongoose')

//estrutura do model (atributos da sua entidade)
const clientesSchema = new mongoose.Schema({
    nome : { type: String },
    email : { type: String },
    cpf : { type: Number },
    dataNascimento : { type: String },
    estadoCivil : { type: String },
    telefone : { type: Number },
    comprou : { type: Boolean }
}, {
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

const clientes = mongoose.model('clientes', clientesSchema)

//exportar o model para ser utilizado
module.exports = clientes