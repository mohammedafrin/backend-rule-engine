const { createRule, combineRules, evaluateRule } = require('../utils/astUtils');
const Rule = require('../models/Rule');

// Create a rule and return AST
exports.createRule = (req, res) => {
    console.log('request body :',req.body)
    const { ruleString } = req.body;
    if(!ruleString)
        res.json({
    message: "rule string is required "})
    const ast = createRule(ruleString);
    res.json({ ast });
};

// Combine multiple rules into a single AST
exports.combineRules = (req, res) => {
    const { rules } = req.body;
    const combinedAST = combineRules(rules);
    res.json({ combinedAST });
};

// Evaluate rule AST against provided data
exports.evaluateRule = (req, res) => {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
};