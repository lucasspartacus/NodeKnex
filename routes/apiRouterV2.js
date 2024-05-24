var express = require('express');
var apiRouterV2 = express.Router();

const knex = require('knex')((require('../knexfile').development));

/* GET home page. */
apiRouterV2.get('/produtos', function(req, res, next) {
 knex('produtos')
  .select('*')
  .then(produtos=>{
    res.status(200).json(produtos)
  })
  .catch(err => res.status(500).json({message: 'erro no get'})) 
});

apiRouterV2.get('/produtos/:id', function(req, res, next) {
  let idbody = req.params.id;
  knex('produtos')
    .where('id', idbody)
    .select('*')
    .then(produtos=>{
      res.status(200).json(produtos)
    })
    .catch(err => res.status(404).json({message: 'erro no get'})) 
});

apiRouterV2.post('/produtos', function(req, res, next) {
  let produto = req.body;
  knex('produtos')
    .insert({descricao: produto.descricao, marca: produto.marca, preco: produto.preco}, ['id', 'descricao', 'marca', 'preco'],) //.isert(produto,['id'])
    .then(produtos=>{
      res.status(200).json(produtos)
    })
    .catch(err => res.status(500).json({message: 'erro no insert'})) 
});

apiRouterV2.delete('/produtos/:id', function(req, res, next){
  let idbody = req.params.id;
  knex('produtos')
    .where('id', idbody)
    .del()
    .then(produtos=>{
      res.status(200).json(produtos)
    })
    .catch(err => res.status(500).json({message: 'erro no delete'})) 
});

apiRouterV2.put('/produtos/:id', function(req, res, next){

  let idbody = req.params.id; 
  let produto = req.body;
  knex('produtos')
    .where('id', idbody)
    .update({descricao: produto.descricao, marca: produto.marca, preco: produto.preco}, ['id', 'descricao', 'marca', 'preco'],)  //.update(produto)
    .then(produtos=>{
      res.status(200).json(produtos)
    })
    .catch(err => res.status(500).json({message: 'erro no update'})) 
});

module.exports = apiRouterV2;
