const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => res.send('hello'))

const examLogin = require('./exam-login')
router.post('/exam-login', examLogin)

module.exports = router;
