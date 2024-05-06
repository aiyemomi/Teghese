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
    image: {
      type: String,
    },
    new_price: { type: String },
    old_price: { type: String, required: true },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
