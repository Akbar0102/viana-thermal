const Face = require('../models/admin.model');

exports.findAll = (req, res) => {
  Face.getAll(req.body.date, (err,data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
}

exports.findType = (req, res) => {
  Face.getType(req.body.date, req.params.type, (err,data) => {
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving customers."
    });
    else res.send(data);
  });
}