
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String
}, {
    timestamps: true
})

// UserSchema.pre('save', function (next) {
//     // Check if document is new or a new password has been set
//     if (this.isNew || this.isModified('password')) {
//         // Saving reference to this because of changing scopes
//         const document = this
//         bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
//             if (err) {
//                 next(err)
//             } else {
//                 document.password = hashedPassword
//                 next()
//             }
//         })
//     } else {
//         next()
//     }
// })

module.exports = mongoose.model('User', UserSchema)