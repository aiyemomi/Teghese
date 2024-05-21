const User = require("../models/user");
const Product = require("../models/product");

const cleanDB = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    return true;
  } catch (error) {
    throw error;
  }
};
module.exports = cleanDB;
