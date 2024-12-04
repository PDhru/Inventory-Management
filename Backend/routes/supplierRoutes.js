const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const {
  addSupplier,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
  importCSV,
  exportCSV,
} = require("../controllers/supplierController");

router.post("/", addSupplier);
router.get("/", getSuppliers);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

// CSV Import/Export Routes
router.post("/import", upload.single("file"), importCSV);
router.get("/export", exportCSV);

module.exports = router;
