const express = require("express");
const upload = require("../config/multer");
const router = express.Router();
const {
  addInventoryItem,
  getInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
  getLowStockItems,
  importCSV,
  exportCSV
} = require("../controllers/inventoryController");

router.post("/", addInventoryItem);
router.get("/", getInventoryItems);
router.get("/low-stock", getLowStockItems);
router.put("/:id", updateInventoryItem);
router.delete("/:id", deleteInventoryItem);

router.post("/import", upload.single("file"), importCSV);
router.get("/export", exportCSV);

module.exports = router;
