const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.post('/api/products', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        _id: 'oeihfzeoi',
        name: "hello product",
        description: "test",
        price: "150",
        inStock: true
    });
});
app.get('/api/products', (req, res, next) => {
    const products = [
      {
        _id: 'oeihfzeoi',
        name: "hello",
        description: "test",
        price: "100",
        inStock: true
      },
      {
        _id: 'rgergeg',
        name: "hello 2",
        description: "test",
        price: "100",
        inStock: true
      }
    ];
    res.status(200).json(products);
  });




module.exports = app;