const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/jwt");
const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// router.use((req, res, next) => {
//   validateToken(req, res, next);
// });
router.route("/").get(getAllUsers);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
