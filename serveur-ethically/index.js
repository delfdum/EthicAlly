const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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


const app = express();

  
// Utilisation du middleware cors pour éviter les problèmes de Same Origin
app.use(cors());

// support parsing of application/json type post data

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////////////////////////
//requête GET pour afficher tous les produits par id décroissant:
app.get('/produits', (req, res) => {
    let sql = 'SELECT * FROM produits ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un produit:
app.get('/produitSelect/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//requête GET pour afficher tous les artisans par id décroissant:
app.get('/artisans', (req, res) => {
    let sql = 'SELECT * FROM artisans ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher un artisan:
app.get('/artisanSelect/:id', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
//requête GET pour afficher LE produit de l'artisan:
app.get('/produitsArtisan/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE artisan_id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

////REQUETE GET POUR PAGE ACCUEIL////////////////////////////////////////////////////////
// GET POUR AFFICHER 8 PRODUITS MAXI QUI ONT été sélectionné par firstPage
app.get('/produitsFirstpage', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE firstPage = "true" LIMIT 8';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
// GET POUR AFFICHER 8 ARTISANS MAXI QUI ONT été sélectionné par firstPage
app.get('/artisansFirstpage', (req, res) => {
    let sql = 'SELECT * FROM artisans WHERE firstPage = "true" LIMIT 8';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

//requête GET pour afficher l' artisan du mois:
// app.get('/artisanDuMois/:id', (req, res) => {
//     let sql = 'SELECT * FROM artisans WHERE id=' + req.params.id + 'AND artisanDuMois="true" LIMIT 1 ';
//     db.query(sql, (err, results) => {
//         if(err) throw err;
//         res.status(200).send(results);
//     })
// })


//requête GET pour afficher 4 produits de l'artisan du mois:
app.get('/produitsArtisanDuMois/:id', (req, res) => {
    let sql = 'SELECT * FROM produits WHERE artisan_id=' + req.params.id  ;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

// requête GET pour sélectionner les produits par categorie
app.get('/produitsCategory/:category', (req, res) => {
    let sql = "SELECT * FROM produits WHERE category =" + "'" + req.params.category + "'";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).send(result);
    })
  });


//requête GET pour afficher l'artisan correspondant à un produit
app.get('/artisanDuProduit/:id', (req, res) => {
    let sql = 'SELECT nom, artisan_id FROM artiste, produits WHERE artiste.id_artiste = produits.artisan_id AND artisan_id =' + req.params.id  ;
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
                                    firstPage) 
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
                        '${req.body.firstPage}')`; 
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

//requête DELETE pour supprimer un produit:
app.delete('/produitdelete/:id', (req, res) => {
    let sql = 'DELETE FROM produits WHERE id=' + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})
/////////////////////UPDATE////////////////////////////////////////////////

///requête UPDATE pour un artisan         
app.put('/changeArtisan/:id', (req, res) => {
    let sql =  `UPDATE artisans SET                                     
                        name = '${req.body.name}',
                        presentation = '${req.body.presentation}',
                        photo = '${req.body.photo}',            
                        origine = '${req.body.origine}',
                        firstPage = '${req.body.firstPage}',
                        artisanDuMois = '${req.body.artisanDuMois}'
                                   
    WHERE id=` + req.params.id;
  
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

///requête UPDATE pour un produit
app.put('/changeProduit/:id', (req, res) => {
    let sql =  `UPDATE produits SET
                        name = '${req.body.name}',
                        artisan_id = '${req.body.artisan_id}',
                        category = '${req.body.category}',
                        type = '${req.body.type}',
                        materials = '${req.body.materials}',                    
                        photo = '${req.body.photo}',
                        dimensions = '${req.body.dimensions}',
                        origine = '${req.body.origine}',
                        longPrez = '${req.body.longPrez}',
                        firstPage = ${req.body.firstPage},
                        produitDuMois = '${req.body.produitDuMois}'
    WHERE id=` + req.params.id;
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})



app.listen('3000', () => {
    console.log('server started on port 3000');
})
