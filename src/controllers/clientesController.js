const clientes = require('../models/clientes');

const getAll = (req, res) => {
    console.log(req.url);
    clientes.find(function(err, clientes) {
      if(err) {
        res.status(424).send({ message : err.message })
      }
      res.status(200).send(clientes);
    })
};

const getCompradores = (req, res) => {
    console.log(req.url);
    clientes.find({ comprou: true }, { nome: 1, email: 1, _id: 0 }, function(err, clientes){
      if(err) {
        res.status(424).send({ message: err.message })
      }

      res.status(200).send(clientes);
    })
};

const getByCpf = (req, res) => {
    console.log(req.url);
    const cpf = req.params.cpf;
    clientes.find({ cpf }, function(err, cliente) {
      if(err) {
        res.status(424).send({ message: err.message })
      } else if (cliente.length > 0) {
        res.status(200).send(cliente);
      } else {
        res.status(404).send("O CPF da cliente não foi encontrado")
      }
    })
};

const postCliente = (req, res) => {
    console.log(req.body);

    let cliente = new clientes(req.body);

    cliente.save(function(err) {
      if(err) {
        res.status(424).send({ message: err.message })
      }
      res.status(201).send({
        status: true,
        mensagem: "Aluna incluída com sucesso!" 
      });
    })
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
