const express = require("express");

const router = express.Router();

const { runSeeder, handleDbCleanUp } = require("../controllers/db");

router.post("/seeder", runSeeder);
router.post("/clean", handleDbCleanUp);

module.exports = router;
