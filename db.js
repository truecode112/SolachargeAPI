const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'solacharge.cujdnpshdxwz.ap-southeast-1.rds.amazonaws.com',
    user: 'dev_alex',
    password: 'OpDOi2qo6V5q',
    database: 'solacharge'
})

conn.connect((err) => {
    if(err) throw err;
    console.log('Connected database successfully!')
})

module.exports = conn;