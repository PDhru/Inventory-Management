const Supplier = require("../models/Supplier");
const fs = require("fs");
const csv = require("csv-parser");
const { Parser } = require("json2csv");

// Add a new supplier
exports.addSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().populate("itemsSupplied");
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a supplier
exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.importCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded. Please upload a CSV file." });
    }

    const filePath = req.file.path;
    const suppliers = [];
    const errors = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        if (!row.name || !row["contactDetails.phone"] || !row["contactDetails.email"]) {
          errors.push({ row, error: "Missing required fields" });
        } else {
          suppliers.push({
            name: row.name,
            contactDetails: {
              phone: row["contactDetails.phone"],
              email: row["contactDetails.email"],
            },
          });
        }
      })
      .on("end", async () => {
        if (errors.length > 0) {
          return res.status(400).json({ message: "CSV contains invalid data", errors });
        }

        try {
          const result = await Supplier.insertMany(suppliers);
          res.status(200).json({
            message: "CSV file imported successfully",
            importedCount: result.length,
          });
        } catch (err) {
          res.status(500).json({ error: `Database error: ${err.message}` });
        } finally {
          fs.unlinkSync(filePath); // Cleanup file
        }
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export Suppliers to CSV
exports.exportCSV = async (req, res) => {
  try {
    const suppliers = await Supplier.find();

    const fields = ["name", "contactDetails.phone", "contactDetails.email"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(suppliers);

    res.header("Content-Type", "text/csv");
    res.attachment("suppliers.csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};