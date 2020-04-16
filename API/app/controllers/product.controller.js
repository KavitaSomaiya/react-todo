
const Product = require('../models/product.models')

// Create and Save a new Product
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Product name cannot be empty.'
    })
  }
  const product = new Product({
    indexImgUrl: req.body.indexImgUrl,
    name: req.body.name,
    sellerName: req.body.sellerName,
    price: req.body.price,
    retailPrice: req.body.retailPrice,
    discount: req.body.discount,
    className: req.body.className,
    dataNumber: req.body.dataNumber
  })
  console.log(product)
  console.log(req.body.product)
  product.save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the Product.'
      })
    })
}

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then(products => {
      res.send(products)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving products.'
      })
    })
}

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: 'Product not found with ID' + req.params.productId
        })
      }
      res.send(product)
    })
    .catch(err => {
      if (err.king === 'ObjectId') {
        return res.status(404).send({
          message: 'Product not found with ID' + req.params.productId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving product with ID' + req.params.productId
      })
    })
}


exports.update = (req, res) => {
  console.log(req.body)
  if(!req.body) {
      return res.status(400).send({
          message: "Product content can not be empty"
      })
  }
  Product.findByIdAndUpdate(req.params.productId, {
    indexImgUrl: req.body.indexImgUrl,
    name: req.body.name,
    price: req.body.price,
    retailPrice: req.body.retailPrice,
    discount: req.body.discount,
    className: req.body.className,
    dataNumber: req.body.dataNumber
  }, {new: true})
  .then(product => {
      if(!product) {
          return res.status(404).send({
              message: "Product not found with ID " + req.params.productId
          })
      }
      res.send(product);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Product not found with ID " + req.params.productId
          })           
      }
      return res.status(500).send({
          message: "Error updating product with ID " + req.params.productId
      })
  })
}

exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
  .then(product => {
      if(!product) {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          })
      }
      res.send({message: "Product deleted successfully!"})
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          })
      }
      return res.status(500).send({
          message: "Could not delete product with id " + req.params.productId
      })
  })
}
