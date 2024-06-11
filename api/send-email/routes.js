const { sendEmailController } = require('./controllers');
const express = require('express');
const router = express.Router();

// POST /api/send-email
router.post('/', sendEmailController);

module.exports = router;