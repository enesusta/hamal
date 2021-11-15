const fs = require('fs');
const yml = require('js-yaml')
const { RULES_FILE } = process.env;

const doc = yml.load(fs.readFileSync(RULES_FILE, 'utf-8'));
const redirections = doc['redirections']

let rules = {};

redirections.forEach(redirection => {
    const from = redirection['from']
    const to = redirection['to']
    rules[from] = to
});

module.exports = rules