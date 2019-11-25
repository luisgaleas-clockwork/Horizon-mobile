const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: { type: String, required: true },
  description: { type: String, required: true },
  img_url: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;