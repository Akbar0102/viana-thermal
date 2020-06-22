const express = require('express');
const router = express.Router();

const face = require("../controllers/admin.controller");

router.get("/face", face.findAll);
router.get("/face/:type", face.findType);

module.exports = router;