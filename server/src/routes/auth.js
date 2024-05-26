const express = require("express");

const { validateToken, validateAdminToken } = require("../middleware/jwt");

const router = express.Router();

const { register, login, getProfile, logout } = require("../controllers/auth");

router.get("/profile", validateToken, getProfile);

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;
