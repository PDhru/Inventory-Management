const InventoryItem = require("../models/InventoryItem");
const fs = require("fs");
const csv = require("csv-parser");
const { Parser } = require("json2csv");

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
  try {
    const item = new InventoryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all inventory items
exports.getInventoryItems = async (req, res) => {
  try {
    const items = await InventoryItem.find().populate("supplierId", "name");
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// low stock items
exports.getLowStockItems = async (req, res) => {
    try {
      const lowStockItems = await InventoryItem.find({ stockLevel: "Low" }).populate("supplierId", "name");
      res.status(200).json(lowStockItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };



// Update an inventory item
exports.updateInventoryItem = async (req, res) => {
  try {
    const item = await InventoryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an inventory item
exports.deleteInventoryItem = async (req, res) => {
  try {
    await InventoryItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.importCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded. Please upload a CSV file." });
    }

    const filePath = req.file.path; // File should be properly received
    const items = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        items.push(row);
      })
      .on("end", async () => {
        try {
          const result = await InventoryItem.insertMany(items);
          res.status(200).json({
            message: "CSV file imported successfully",
            importedCount: result.length,
          });
        } catch (err) {
          res.status(500).json({ error: err.message });
        } finally {
          fs.unlinkSync(filePath); // Cleanup file
        }
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



  exports.exportCSV = async (req, res) => {
    try {
      const inventoryItems = await InventoryItem.find().populate("supplierId", "name");
  
      const fields = ["itemName", "quantity", "category", "supplierId"];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(inventoryItems);
  
      res.header("Content-Type", "text/csv");
      res.attachment("inventory.csv");
      res.send(csv);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };