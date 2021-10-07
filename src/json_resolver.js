const fs = require('fs');
const { RULES_FILE } = process.env;

const rawData = fs.readFileSync(RULES_FILE);

rawData.forEach(console.log)

module.exports = JSON.parse(rawData);