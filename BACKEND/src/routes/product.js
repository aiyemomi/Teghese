const express = require("express");
const { validateToken, validateAdminToken } = require("../middleware/jwt");
const upload = require("../config/multer");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// router.use(validateToken);

// router
//   .route("/")
//   .get(getAllProducts)
//   .post(upload.single("image"), createProduct);

// router
//   .route("/:id")
//   .get(getSingleProduct)
//   .patch(upload.single("image"), updateProduct)
//   .delete(deleteProduct);

router.get("/", validateToken, getAllProducts);
router.get("/:id", validateToken, getSingleProduct);
router.post("/", validateAdminToken, upload.single("image"), createProduct);
router.patch("/:id", validateAdminToken, upload.single("image"), updateProduct);
router.delete("/:id", validateAdminToken, deleteProduct);

module.exports = router;
