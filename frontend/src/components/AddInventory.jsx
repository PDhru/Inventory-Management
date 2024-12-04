import React, { useState, useEffect } from "react";
import { getSuppliers, addInventoryItem } from "../services/api"; // Import API functions
import { toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const AddInventory = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    category: "",
    supplierId: "",
    lowStockThreshold: "",
  });
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await getSuppliers();
      setSuppliers(response.data);
    } catch (err) {
      toast.error("Error fetching suppliers. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add inventory item
      await addInventoryItem(formData);
      toast.success("Inventory item added successfully!"); // Success toast
      setFormData({ itemName: "", quantity: "", category: "", supplierId: "", lowStockThreshold: "" });
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add inventory item. Please try again."); // Error toast
    }
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Inventory Item</h4>
              </div>
              <div className="card-body pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="itemName" className="form-label">Item Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="itemName"
                      name="itemName"
                      value={formData.itemName}
                      onChange={handleChange}
                      placeholder="Enter item name"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                      className="form-control"
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Enter quantity"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                      className="form-control"
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="Enter category"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="supplierId" className="form-label">Supplier</label>
                    <select
                      className="form-control"
                      id="supplierId"
                      name="supplierId"
                      value={formData.supplierId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Supplier</option>
                      {suppliers.map((supplier) => (
                        <option key={supplier._id} value={supplier._id}>
                          {supplier.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="lowStockThreshold" className="form-label">Low Stock Threshold</label>
                    <input
                      className="form-control"
                      type="number"
                      id="lowStockThreshold"
                      name="lowStockThreshold"
                      value={formData.lowStockThreshold}
                      onChange={handleChange}
                      placeholder="Enter low stock threshold"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add Inventory Item</button>
                </form>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
