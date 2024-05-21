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
    return res.status(201).json({ new_user });
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
    throw new customError("The specified user does not exist", 400);
  }
  const password_match = await comparePasswords(password, user.password);

  if (!password_match) {
    return res
      .status(400)
      .json({ error: "wrong username and password combination" });
  }
  const access_token = createToken(user);
  res.cookie("access-token", access_token, {
    maxAge: 60 * 60 * 24 * 7 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  const { password: userPassword, ...userData } = user._doc;

  return res.status(200).json(userData);
});

const getProfile = asyncWrapper(async (req, res) => {
  if (req.user) {
    return res.json({
      user: req.user,
      status: "logged in",
    });
  }
  return res.status(401).json({ message: "not logged in" });
});

module.exports = {
  register,
  login,
  getProfile,
};
