const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth');
const { formatResponse } = require('./utils');

router.get('/', (req, res) => {
  res.json(formatResponse(true, 'Welcome to DevSecOps Demo API'));
});

router.get('/health', (req, res) => {
  res.json(formatResponse(true, 'Service is healthy'));
});

router.post('/login', authenticate, (req, res) => {
  res.json(formatResponse(true, 'Login successful', { user: req.user }));
});

module.exports = router;