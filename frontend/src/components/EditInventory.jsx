import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateInventoryItem } from "../services/api";
import { toast } from 'react-toastify';

const EditInventory = () => {
  const { id } = useParams(); // Get inventory item ID from URL
  const navigate = useNavigate();
  const [item, setItem] = useState({
    itemName: "",
    quantity: "",
    category: "",
    supplierId: "",
    stockLevel: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventoryItem();
  }, []);

  const fetchInventoryItem = async () => {
    try {
      const response = await updateInventoryItem(id); // Get the item by ID
      setItem(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching inventory item:", error.message);
      toast.error("Failed to load inventory item data");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateInventoryItem(id, item); // Update inventory item using the API
      toast.success("Inventory item updated successfully");
      navigate("/"); // Navigate back to inventory dashboard
    } catch (error) {
      console.error("Error updating inventory item:", error.message);
      toast.error("Failed to update inventory item");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message until the data is fetched
  }

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edit Inventory Item</h4>
              </div>
              <div className="card-body pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="itemName" className="form-label">Item Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="itemName"
                      name="itemName"
                      value={item.itemName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={item.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      name="category"
                      value={item.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="stockLevel" className="form-label">Stock Level</label>
                    <input
                      type="text"
                      className="form-control"
                      id="stockLevel"
                      name="stockLevel"
                      value={item.stockLevel}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Item
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInventory;
