const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    indexImgUrl: String,
    name: String,
    sellerName: String,
    price: String,
    retailPrice: String,
    discount: String,
    className: String,
    dataNumber: String,
    // cartItems: { type: Schema.Types.ObjectId, ref: 'CartItems' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);