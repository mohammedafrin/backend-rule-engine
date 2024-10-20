//Node class represents each node in the AST
class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;  // 'AND', 'OR', 'operand'
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

// Helper function to parse the rule string into an AST
const createRule = (ruleString) => {
     
    // A simple parser for converting rule strings into AST.
    if (ruleString.includes('AND')) {
        const parts = ruleString.split('AND').map(s => s.trim());
        return new Node('AND', createRule(parts[0]), createRule(parts[1]));
    } else if (ruleString.includes('OR')) {
        const parts = ruleString.split('OR').map(s => s.trim());
        return new Node('OR', createRule(parts[0]), createRule(parts[1]));
    } else {
        // Base case: operand node
        return new Node('operand', null, null, ruleString);
    }
};

// Helper function to combine multiple ASTs into a single one
const combineRules = (rules) => {
    // Combines two or more ASTs under an OR node (for simplicity).
    let combinedAST = rules[0];
    for (let i = 1; i < rules.length; i++) {
        combinedAST = new Node('OR', combinedAST, rules[i]);
    }
    return combinedAST;
};

// Helper function to evaluate the AST against the provided data
const evaluateRule = (root, data) => {
    if (!root) return false;

    switch (root.type) {
        case 'AND':
            return evaluateRule(root.left, data) && evaluateRule(root.right, data);
        case 'OR':
            return evaluateRule(root.left, data) || evaluateRule(root.right, data);
        case 'operand':
            return evalOperand(root.value, data);
        default:
            return false;
    }
};

// Evaluates a single operand (e.g., "age > 30")
const evalOperand = (condition, data) => {
    // Parse operand condition, handling string comparisons and integers
    const match = condition.match(/(\w+)\s*([<>=!]+)\s*(['"]?\w+['"]?)/);
    if (!match) {
        console.error('Invalid condition:', condition);
        return false;
    }

    let [_, field, operator, value] = match;
    const fieldValue = data[field];

    // Remove quotes from value if present (e.g., 'Sales' -> Sales)
    if (value.startsWith("'") || value.startsWith('"')) {
        value = value.slice(1, -1);
    }

    // Evaluate based on the operator
    switch (operator) {
        case '>':
            return fieldValue > parseInt(value);
        case '<':
            return fieldValue < parseInt(value);
        case '>=':
            return fieldValue >= parseInt(value);
        case '<=':
            return fieldValue <= parseInt(value);
        case '==':
        case '=':
            return fieldValue == value;  // Compare numbers or strings
        case '!=':
            return fieldValue != value;
        default:
            return false;
    }
};

module.exports = { createRule, combineRules, evaluateRule };