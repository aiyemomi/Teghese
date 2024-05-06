const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const customError = require("../errors/customError");
const jwt_secret = process.env.JWT_SECRET;

const hashPassword = async (input) => {
  if (input.length < 6) {
    throw new customError("Password must be at least 6 characters long", 400);
  }

  try {
    const hash = await bcrypt.hash(input, 10);
    return hash;
  } catch (error) {
    throw new customError("Error hashing password", 500);
  }
};

const comparePasswords = async (input, hash) => {
  try {
    const result = await bcrypt.compare(input, hash);
    return result;
  } catch (error) {
    throw new customError("Error comparing passwords", 500);
  }
};

const getJwtUserPayload = (user) => {
  const admin_role = user?.isAdmin ? ", ROLE_ADMIN" : "";
  return {
    roles: "ROLE_USER" + admin_role,
    id: user._id,
    username: user.firstName + " " + user.lastName,
  };
};
const createToken = (user) => {
  try {
    const jwt_user_payload = getJwtUserPayload(user);
    const token = jwt.sign(jwt_user_payload, jwt_secret);
    return token;
  } catch (error) {
    throw new customError("Error creating token", 500);
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
  createToken,
  getJwtUserPayload,
};
