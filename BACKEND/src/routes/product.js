const express = require("express");
const { validateToken, validateAdminToken } = require("../middleware/jwt");
const upload = require("../config/multer");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  getNewProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.get("/", getAllProducts);
router.get("/new", getNewProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getSingleProduct);
router.post("/", validateAdminToken, upload.single("image"), createProduct);
router.patch("/:id", validateAdminToken, upload.single("image"), updateProduct);
router.delete("/:id", validateAdminToken, deleteProduct);

module.exports = router;
