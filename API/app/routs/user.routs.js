
module.exports = (app) => {
    const users = require('../controllers/user.controller')
    app.post('/users', users.create)
    app.post('/users/login', users.login)
    app.get('/users', users.findAll)
    app.get('/users/:userId', users.findOne)
    app.put('/users/:userId', users.update)
    app.delete('/users/:userId', users.delete)
}