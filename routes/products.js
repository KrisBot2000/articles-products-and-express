const express = require('express');
const router = express.Router();
const database = require('../db/utilities/db-connect');



router.route('/')
  .post(function(req, res) {
    const result = pdb.create(req.body);
    if(result){
      console.log('hi!');
      let one = req.body;
      res.render('./products/product', {id: one.id, name: one.name, price: one.price, inventory: one.inventory});
    }else{
      res.redirect('/products/new');
    }
  })

  .get(function(req, res) {
    database.query('SELECT * FROM products')
    .then(function(allProducts){
      console.log(allProducts);
      res.render('products/index', {products: allProducts});
    })
    .catch(function(err){
      console.log(err);

    })

  });

///////////////

router.get('/new', function(req, res) {
  console.log("here");
  res.send('new');
});

////////////////

router.route('/:id')
  .put(function(req, res) {
    if(true){
      res.redirect(`/products/:${req.id}`);
    }else{
      res.redirect('/products/:id/edit');
    }
  })

  .delete(function(req, res) {
    let poot = pdb.delete(req.body.id);
    if(poot===true){
      res.redirect('/products');
    }else{
      res.redirect('/products/:id');
    }
  })

  .get(function(req, res) {
    console.log(req.params);
    let one = pdb.findOne(Number(req.params.id));

    console.log(one);
    res.render('./products/product', {id: one.id, name: one.name, price: one.price, inventory: one.inventory});

});

/////////////////

router.get('/:id/edit', function(req, res) {
  res.send();
});



module.exports = router;