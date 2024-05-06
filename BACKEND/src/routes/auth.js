const express = require("express");

const router = express.Router();

const { register, login, getStatus } = require("../controllers/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/status", getStatus);

module.exports = router;
