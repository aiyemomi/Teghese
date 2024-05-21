const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const token = req.cookies["access-token"];

  if (!token) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  try {
    const valid_token = jwt.verify(token, jwt_secret);

    if (valid_token) {
      req.user = valid_token;
      next();
    }
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
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
