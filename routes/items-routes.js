const express = require('express');
const router = express.Router();
const getAllItems = require('../controller/items-controller');

router.get('/', getAllItems);

module.exports = router;