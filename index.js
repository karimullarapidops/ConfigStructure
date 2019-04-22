const ENV = process.env.NODE_ENV || 'local';
global.CONFIG = require(`${__dirname}/config/${ENV}.json`);

const express = require('express')
const app = express()

app.listen(global.CONFIG.port, () => console.log(`Example app listening on port ${global.CONFIG.port}!`))





// NODE_ENV is the key name to declare environment
// NODE_ENV=staging node index.js to run
// NODE_ENV=production node index.js to run
// NODE_ENV=dev node index.js to run