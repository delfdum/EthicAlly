
const mysql = require("mysql2");

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'ethically',
    port: 8889,

});

// Connection à la bdd:
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql is Connected');
});

module.exports = mysql; 