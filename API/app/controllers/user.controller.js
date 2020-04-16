
const User = require('../models/user.models')

// Create and Save a new User
exports.create = (req, res) => {
  if (!req.body.userName) {
    return res.status(400).send({
      message: 'User name cannot be empty.'
    })
  }
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName:  req.body.userName,
    password:  req.body.password
  })
  user.save()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the User.'
      })
    })
}

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving users.'
      })
    })
}

exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with ID' + req.params.userId
        })
      }
      res.send(user)
    })
    .catch(err => {
      if (err.king === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with ID' + req.params.userId
        })
      }
      return res.status(500).send({
        message: 'Error retrieving user with ID' + req.params.userId
      })
    })
}


exports.update = (req, res) => {
  console.log(req.body)
  if(!req.body) {
      return res.status(400).send({
          message: "User content can not be empty"
      })
  }
  User.findByIdAndUpdate(req.params.userId, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName:  req.body.userName,
    password:  req.body.password
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with ID " + req.params.userId
          })
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with ID " + req.params.userId
          })           
      }
      return res.status(500).send({
          message: "Error updating user with ID " + req.params.userId
      })
  })
}

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          })
      }
      res.send({message: "User deleted successfully!"})
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          })
      }
      return res.status(500).send({
          message: "Could not delete user with id " + req.params.userId
      })
  })
}

// exports.findOne = (req, res) => {
//   User.findById(req.params.userId)
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({
//           message: 'User not found with ID' + req.params.userId
//         })
//       }
//       res.send(user)
//     })

exports.login = (req, res) => {
  User.findOne({userName: req.body.userName, password: req.body.password})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with Name " + req.body.userName
          });            
      }
      const result = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName:  user.userName,
        password:  user.password
      }
      res.send(result);
  }).catch(err => {
      if(err.kind === 'string') {
          return res.status(404).send({
              message: "User not found with id " + req.body.userName
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with id " +  req.body.userName
      });
  });
 
}