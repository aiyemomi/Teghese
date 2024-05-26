const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    category: { type: String, required: true },
    subCategories: [String],
    image: {
      type: String,
    },
    colors: [String],
    new_price: { type: String },
    old_price: { type: String },
    available: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 5.0,
    },
    sizes: [String],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
