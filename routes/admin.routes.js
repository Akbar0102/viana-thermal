const express = require('express');
const router = express.Router();

const face = require("../controllers/admin.controller");

router.post("/face", face.findAll);
router.post("/face/count", face.countAll);
router.post("/face/daily", face.countDaily);

module.exports = router;