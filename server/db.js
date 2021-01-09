const mysql = require('mysql');
const rootPath = __dirname;
const db = mysql.createConnection({
    host: 'mentalqna.cybjlsqfvawm.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'startitil',
    database: 'mentalqna'
});

db.connect((err) => {
    if (err) throw err
    console.log("connected to mentalqna")
})

module.exports = {db, rootPath};