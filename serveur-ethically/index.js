const express = require('express');
const cors = require('cors')
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'admin_2020',
    database: 'ethicallydb'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});

const app = express();

app.use(cors());

// Select posts
app.get('/allproduits', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

// Create entrepreneurs table : fait sur Workbench : plus sécure
// app.get('/createentrepreneurstable', (req, res) => {
//   let sql = 'CREATE TABLE entrepreneurs (id INT AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, city VARCHAR(255), country VARCHAR(255), mail VARCHAR(255), phone INT, raison_sociale VARCHAR(255), siret INT, capital_social INT, ca INT, PRIMARY KEY(id)';
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Entrepreneurs table created');
//   });
// });

// Connexion Workbench : donner un nom à la connexion de MySQL server
// host : localhost (ligne 6 de ce doc)
// port : 3306 (par défaut pour MySQL ; le port 3000 est le port d'écoute de Node (tout en bas sur ce doc : app.listen))
// user + password : celui indiqué ci-dessus en lignes 5 à 10
// Clic Test connection

// Table projets (créée directement sur Workbench) :
// CREATE TABLE projets (id INT AUTO_INCREMENT PRIMARY KEY, titre VARCHAR(255), description TEXT, financial_needs INT, other_needs TEXT, img VARCHAR(255), logo VARCHAR(255))";

// Table investisseurs (créée directement sur Workbench) :
// CREATE TABLE investisseurs (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), address VARCHAR(255), cp INT, phone INT, country VARCHAR(255), mail VARCHAR(255), risk VARCHAR(255), amount-to-invest INT, profitability INT, why_invest VARCHAR(255))";


app.listen('3000', () => {
    console.log('server started on port 3000');
})
