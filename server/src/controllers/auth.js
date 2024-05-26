const User = require("../models/user");
const customError = require("../errors/customError");
const asyncWrapper = require("../middleware/asyncWrapper");
const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;
const {
  hashPassword,
  comparePasswords,
  getJwtUserPayload,
  createToken,
} = require("../services/auth");

const register = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user_exists = await User.findOne({ email });
  if (!user_exists) {
    const hashed_password = await hashPassword(password);

    const new_user = await User.create({
      ...req.body,
      password: hashed_password,
    });

    const { password: _, ...userData } = new_user._doc;
    return res.status(201).json(userData);
  }
  throw new customError("email already exists", 400);
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new customError("Please provide email and password", 400);
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new customError(
      "Username not found. Please check your entry or create a new account.",
      404
    );
  }
  const password_match = await comparePasswords(password, user.password);

  if (!password_match) {
    throw new customError("Wrong username and password combination", 400);
  }
  const access_token = createToken(user);
  res.cookie("access-token", access_token, {
    maxAge: 60 * 60 * 24 * 7 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    secure: true,
  });
  const { password: userPassword, ...userData } = user._doc;
  return res.status(200).json(userData);
});

const logout = asyncWrapper(async (req, res) => {
  res.clearCookie("access-token");
  return res.status(200).json("Successfully logged out");
});

const getProfile = asyncWrapper(async (req, res) => {
  if (req.user) {
    const { password, ...userData } = req.user._doc;
    return res.json({
      ...userData,
      status: "logged in",
    });
  }
  throw new customError("Not logged in", 401);
});

module.exports = {
  register,
  login,
  logout,
  getProfile,
};
