const express = require('express');
const router = express.Router();
const database = require('../db/utilities/db-connect');



router.route('/')
  //POST PRODUCT
  .post(function(req, res) {

    return database
      .query(
        'INSERT INTO products (name, price, inventory) VALUES ($1, $2, $3)',
        [req.body.name, parseInt(req.body.price), parseInt(req.body.inventory)]
      )
      .then(function(result){
        res.redirect('products/');
      })
      .catch(function(err){
        console.log('err in /products POST:', err);
        res.redirect('/products/new');
      });
  })
  //GET ALL PRODUCTS
  .get(function(req, res) {

    return database
      .query(
        'SELECT * FROM products'
      )
      .then(function(allProducts){
        res.render('products/index', {products: allProducts});
      })
      .catch(function(err){
        console.log('err in GET ALL catch: ', err);
      });
  });

router.get('/new', function(req, res) {
  res.render('products/new');
});

router.route('/:id')
  // .put(function(req, res) {
  //   if(true){
  //     res.redirect(`/products/:${req.id}`);
  //   }else{
  //     res.redirect('/products/:id/edit');
  //   }
  // })

  //DELETE PRODUCT by ID
  .delete(function(req, res) {

    return database
      .query(
        'DELETE FROM products WHERE products.id = $1',
        [req.params.id]
      )
      .then(function(x){
        res.redirect('/products')
      })
      .catch(function(err){
        res.redirect('/products/:id');
      });
  })
  //GET PRODUCT by ID
  .get(function(req, res) {

    return database
      .query(
        'SELECT * FROM products WHERE products.id = $1',
        [req.params.id]
      )
      .then(function(hoop){
        res.render('products/product', hoop[0])
      })
      .catch(function(err){
        res.redirect('/products/:id');
      });
  });

// /////////////////

// router.get('/:id/edit', function(req, res) {
//   res.send();
// });



module.exports = router;