const jwt = require("jsonwebtoken");
const { User } = require("../models");
const customError = require("../errors/customError");
const jwt_secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.cookies["access-token"];

  if (!token) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  try {
    const valid_token = jwt.verify(token, jwt_secret);

    if (!valid_token) {
      throw new customError("Token not valid", 400);
    }

    const user = await User.findById(valid_token.id);
    if (!user) {
      throw new customError("User not found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
const validateAdminToken = (req, res, next) => {
  const token = req.cookies["access-token"];

  if (!token) {
    return res
      .status(401)
      .json({ error: "User not authenticated. You need to log in" });
  }
  try {
    const jwt_decoded = jwt.verify(token, jwt_secret);
    req.user = jwt_decoded;
    if (jwt_decoded.roles.includes("ROLE_ADMIN")) {
      if (req.user) {
        next();
      }
    } else {
      return res
        .status(403)
        .json({ error: "You need to be an admin to access this resource" });
    }
  } catch (error) {
    return res.status(400).json({ error: "something went wrong" });
  }
};

module.exports = { validateToken, validateAdminToken };
