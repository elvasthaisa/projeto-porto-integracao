const getAll = (req, res) => {
    console.log("getAll");
      res.status(200).send("ok");
};

const getCompradores = (req, res) => {
    console.log("getCompradores");
      res.status(200).send("ok");
};

const getByCpf = (req, res) => {
    console.log("getByCpf");
      res.status(200).send("ok");
};

const postCliente = (req, res) => {
    console.log("postCliente");
      res.status(200).send("ok");
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
