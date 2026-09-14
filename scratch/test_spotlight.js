const fs = require('fs');
const content = fs.readFileSync('./lib/data/events.ts', 'utf8');
const regex = /"Name of Events":\s*"([^"]+)"/g;
let match;
const titles = [];
while ((match = regex.exec(content)) !== null) {
  titles.push(match[1]);
}
console.log('Titles found:');
titles.forEach((t, i) => console.log(i + 1, t));
