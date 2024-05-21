const express = require("express");

const { validateToken, validateAdminToken } = require("../middleware/jwt");

const router = express.Router();

const { register, login, getProfile } = require("../controllers/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/profile", validateToken, getProfile);

module.exports = router;
