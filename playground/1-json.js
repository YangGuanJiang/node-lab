const fs = require('fs');
const info = JSON.parse(fs.readFileSync('1-json.json','utf-8'));
info.name = "yang";
info.age = 25;
fs.writeFileSync('1-json.json',JSON.stringify(info))
