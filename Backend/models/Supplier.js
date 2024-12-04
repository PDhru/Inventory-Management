const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contactDetails: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
  },
  itemsSupplied: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InventoryItem",
    },
  ],
});

module.exports = mongoose.model("Supplier", SupplierSchema);
