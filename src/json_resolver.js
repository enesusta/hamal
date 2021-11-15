const fs = require('fs');
const ruleFileExtension = require("./extension_decider")
const { RULES_FILE } = process.env;

const rawData = fs.readFileSync(RULES_FILE);
let exportedData;

if (ruleFileExtension === '.json') {
    exportedData = JSON.parse(rawData)
}

module.exports = exportedData;