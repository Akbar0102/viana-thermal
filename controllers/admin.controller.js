const Face = require('../models/admin.model');

exports.findAll = (req, res) => {
  Face.getAll(req.body.date, (err,data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else{
      var tes = JSON.stringify({data: data});
      res.status(200).send(tes);
    }
  });
}

exports.countAll = (req, res) => {
  Face.getCountAll(req.body.date, (err,data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
}

exports.findType = (req, res) => {
  Face.getType(req.body.date, req.body.type, (err,data) => {
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving customers."
    });
    else res.send(data);
  });
}