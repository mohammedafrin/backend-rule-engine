const express = require('express');
const router = express.Router();
const { createRule, combineRules, evaluateRule } = require('../controllers/ruleController');

// Routes for creating, combining, and evaluating rules
router.post('/create', createRule);
router.post('/combine', combineRules);
router.post('/evaluate', evaluateRule);

module.exports = router;