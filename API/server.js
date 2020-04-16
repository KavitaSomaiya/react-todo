
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express() // create express app

app.use(cors())
app.use(bodyParser.urlencoded( {extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

// Configuring the database
const dbConfig = require('./config/database-config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to database')
}).catch(() => {
    console.log('Could not connect to database. Exiting now...', err)
    process.exit()
})

app.get('/', (req, res) => {
    console.log(req)
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."})
})


require('./app/routs/product.routs.js')(app)
require('./app/routs/user.routs.js')(app)

app.listen(7000, () => {
    console.log('Server listening on 7000')
})



// app.post('/add', function (req, res) {
//     console.log(req)
//     var imgUrl = req.body.imgUrl
//     var name = req.body.name
//     var price = req.body.price
//     var retailPrice = req.body.retailPrice
//     var discount = req.body.discount
//     var dataNumber = req.body.dataNumber
//     var obj = {
//         data : [{
//             imgUrl,
//             name,
//             price,
//             retailPrice,
//             discount,
//             dataNumber
//         }]
//     }
//     var ObjString = JSON.stringify(obj) 
    
//     fs.writeFile('product.json', ObjString, 'utf8', function (err) {
//         if (err) {
//             console.log('An error occured while writing JSON Object to File."')
//             return console.log(err)
//         }
//         console.log('JSON file has been saved.')
//     })
// })