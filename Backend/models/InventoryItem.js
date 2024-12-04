const mongoose = require("mongoose");

// const InventoryItemSchema = new mongoose.Schema({
//   itemName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
//   category: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   supplierId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Supplier",
//     required: true,
//   },
//   stockLevel: {
//     type: String,
//     enum: ["Low", "Medium", "High"],
//     default: "Medium",
//   },
// });

// module.exports = mongoose.model("InventoryItem", InventoryItemSchema);
const InventoryItemSchema = new mongoose.Schema({
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    stockLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    lowStockThreshold: {
      type: Number,
      required: true,
      default: 10, // Default threshold
    },
  });
  
  InventoryItemSchema.methods.calculateStockLevel = function () {
    if (this.quantity <= this.lowStockThreshold) {
      this.stockLevel = "Low";
    } else if (this.quantity <= this.lowStockThreshold * 2) {
      this.stockLevel = "Medium";
    } else {
      this.stockLevel = "High";
    }
  };
  
  InventoryItemSchema.pre("save", function (next) {
    this.calculateStockLevel();
    next();
  });
  
  module.exports = mongoose.model("InventoryItem", InventoryItemSchema);
  