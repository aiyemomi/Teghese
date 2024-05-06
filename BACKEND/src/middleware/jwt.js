const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;
const { getJwtUserPayload } = require("../services/auth");
const validateToken = (req, res, next) => {
  const token = req.cookies["access-token"];

  if (!token) {
    return res.status(400).json({ error: "User not authenticated" });
  }
  try {
    const valid_token = jwt.verify(token, jwt_secret);
    if (valid_token) {
      next();
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
const validateAdminToken = (req, res, next) => {
  const token = req.cookies["access-token"];
  const jwt_decoded = jwt.verify(token, jwt_secret);

  if (!token) {
    return res
      .status(400)
      .json({ error: "User not authenticated. You need to log in" });
  }
  try {
    if (jwt_decoded.roles === "ROLE_USER, ROLE_ADMIN") {
      const valid_token = jwt.verify(token, jwt_secret);
      if (valid_token) {
        next();
      }
    } else {
      return res
        .status(400)
        .json({ error: "You need to be an admin to access this resource" });
    }
  } catch (error) {
    return res.status(400).json({ error: "something went wrong" });
  }
};

module.exports = { validateToken, validateAdminToken };
