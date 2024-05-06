const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "must provide first name"],
    },
    lastName: {
      type: String,
      required: [true, "must provide last name"],
    },
    email: { type: String, required: true, unique: true },
    //   cartData: { type: Object },
    password: {
      type: String,
      minLength: [6, "Password must be at least 6 characters long"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
