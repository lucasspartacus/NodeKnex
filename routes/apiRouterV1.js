var express = require('express');
const { param } = require('.');
var apiRouterV1 = express.Router();

var produtos =[
  {"id": 1, "descricao": "camiseta", "marca":"Nike", "preco": 49.99},
  {"id": 2, "descricao": "camiseta2", "marca":"Nike", "preco": 59.99},
  {"id": 3, "descricao": "camiseta3", "marca":"Nike", "preco": 69.99},
  {"id": 4, "descricao": "camiseta4", "marca":"Nike", "preco": 79.99},
  {"id": 5, "descricao": "camiseta5", "marca":"Nike", "preco": 99.99},
  {"id": 6, "descricao": "camiseta6", "marca":"Nike", "preco": 89.99},
  {"id": 7, "descricao": "camiseta7", "marca":"Nike", "preco": 19.99},
  {"id": 8, "descricao": "camiseta8", "marca":"Nike", "preco": 29.99},
  {"id": 9, "descricao": "camiseta9", "marca":"Nike", "preco": 39.99},
  {"id": 10, "descricao": "camiseta10", "marca":"Nike", "preco": 49.99}
]

/* GET home page. */
apiRouterV1.get('/produtos', function(req, res, next) {
 res.json(produtos);
});

apiRouterV1.get('/produtos/:id', function(req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt =  Number.parseInt(id);
    let idx = produtos.findIndex(o => o.id === idInt); 
    if(idx > -1){
      res.json(produtos[idx]);
    }
    else{
      res.status(404).json({message: `Produto não enmcontrado` });
    }
  }
  else{
    res.status(404).json({message: `Produto não enmcontrado` });
  }
});

apiRouterV1.post('/produtos', function(req, res, next) {
  let produto = req.body;
  let newId = Math.max(...produtos.map(o => o.id)) + 1; // Pega o ultimo id da array produtos e add 1 
  produto.id = newId;
  produtos.push(produto);
  res.status(201).json({message: 'Produto inserido', data:{id: newId}});
});


apiRouterV1.delete('/produtos/:id', function(req, res, next){
  let id = req.params.id;
  pr
  if (id) {
    idInt =  Number.parseInt(id);
    let idx = produtos.findIndex(o => o.id === idInt); 
    if(idx > -1){
      produtos.splice(idx, 1);//Apaga um regristo do array
      res.status(200).json({message: `Produto apagado` });
    }
    else{
      res.status(404).json({message: `Produto não enmcontrado` });
    }
  }
  else{
    res.status(404).json({message: `Produto não enmcontrado` });
  }
});

apiRouterV1.put('/produtos/:id', function(req, res, next){
  let id = req.params.id;
  let produto = req.body;
  if (id) {
    idInt =  Number.parseInt(id);
    let idx = produtos.findIndex(o => o.id === idInt); 
    if(idx > -1){
      produtos[idx].descricao = produto.descricao;  //Altera cada campo do array
      produtos[idx].marca = produto.marca; 
      produtos[idx].preco = produto.preco; 
      res.status(200).json({message: `Produto alterado`, data:{produto: produto[idx]}});
    }
    else{
      res.status(404).json({message: `Produto não enmcontrado` });
    }
  }
  else{
    res.status(404).json({message: `Produto não enmcontrado` });
  }
});

module.exports = apiRouterV1;
