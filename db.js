const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'solacharge'
})

conn.connect((err) => {
    if(err) throw err;
    console.log('Connected database successfully!')
})

module.exports = conn;