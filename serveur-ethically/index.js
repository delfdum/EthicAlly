const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
// create connection à la bdd mysql:
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'MOUCHETTE',
    database: 'new_schema_alix'
});

// ALIX ALIX ALIX ALIX ALIX ALIX ALIX ALIX ALIX ALIX ALIX 
// ci-dessus dans password, mets le tien





// Connection à la bdd:
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});
// Utilisation du middleware cors pour éviter les problèmes de Same Origin
app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////////////
//requête GET pour afficher tous les produits:
app.get('/produits', (req, res) => {
    let sql = 'SELECT * FROM produits';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un produit:
app.get('/produit/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher tous les artisans:
app.get('/artisans', (req, res) => {
    let sql = 'SELECT * FROM artisans';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un artisan:
app.get('/artisan/:id', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher LE produit de l'artisan:
//PAS TRES SURE ENCORE DONC TU PEUX COMMENTER POUR VOIR SI LE RESTE FONCTIONNE
app.get('/produitsArtisan/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE artisan_id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//////////////// REQUETES POST ////////////////

//POST pour entrer un nouvel artisan:
app.post('/artisans/nouveau', (req, res) => {
    let sql =  `INSERT INTO artisans (name, presentation, thumbnail, photo, firstPage, artisanDuMois) 
    VALUES ('${req.body.name}', '${req.body.presentation}', '${req.body.thumbnail}', '${req.body.photo}', ${req.body.firstPage}, ${req.body.artisanDuMois} )`;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//POST pour entrer un nouveau produit:
app.post('/produits/nouveau', (req, res) => {
    let sql =  `INSERT INTO produits 
                                    (name, 
                                    artisan_id, 
                                    category, 
                                    type,  
                                    materials, 
                                    thumbnail, 
                                    photo, 
                                    dimensions, 
                                    origine, 
                                    longPrez, 
                                    produitDuMois, 
                                    artisanDuMois) 
                VALUES ('${req.body.name}',
                        '${req.body.artisan_id}', 
                        '${req.body.category}',
                        '${req.body.type}', 
                        '${req.body.materials}',
                        '${req.body.thumbnail}',
                        '${req.body.photo}', 
                        '${req.body.dimensions}',
                        '${req.body.origine}', 
                        '${req.body.longPrez}', 
                        '${req.body.produitDuMois}', 
                        '${req.body.artisanDuMois}' )`;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

/////////////////////////DELETE////////////////////////////////////////////  

//requête DELETE pour supprimer un artisan:
app.delete('/artisandelete/:id', (req, res) => {
    let sql = 'DELETE FROM artisans WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})


/////////////////////UPDATE////////////////////////////////////////////////
///requête UPDATE pour un artisan    
     
app.put('/changeArtisan/:id', (req, res) => {
    let sql =  `UPDATE artisans SET                  
                        name = '${req.body.name}' , 
                        presentation = '${req.body.presentation}', 
                        thumbnail = '${req.body.thumbnail}', 
                        photo = '${req.body.photo}', 
                        firstPage = ${req.body.firstPage}, 
                        artisanDuMois = ${req.body.artisanDuMois}
    WHERE id=` + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})











app.listen('3000', () => {
    console.log('server started on port 3000');
})
