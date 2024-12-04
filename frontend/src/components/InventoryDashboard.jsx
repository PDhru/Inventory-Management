import React, { useEffect, useState } from "react";
import { getInventoryItems, getLowStockItems, exportCSV, importCSV ,deleteInventoryItem } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const InventoryDashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [lowStockItems, setLowStockItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInventory();
    fetchLowStockItems();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await getInventoryItems();
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error.message);
    }
  };

  const fetchLowStockItems = async () => {
    try {
      const response = await getLowStockItems();
      setLowStockItems(response.data);
    } catch (error) {
      console.error("Error fetching low stock items:", error.message);
      toast.error("Failed to load low stock items");
    }
  };

  const getStockLevelClass = (stockLevel) => {
    if (stockLevel === "Low") return "text-danger"; // Red color for Low stock
    if (stockLevel === "Medium") return "text-warning"; // Yellow for Medium stock
    return "text-success"; // Green for sufficient stock
  };

  const handleExportCSV = async () => {
    try {
      const response = await exportCSV();
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "inventory.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error exporting CSV:", error.message);
    }
  };

  const handleImportCSV = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await importCSV(formData);
      console.log("Import successful:", response.data);
      fetchInventory(); // Refresh inventory after import
    } catch (error) {
      console.error("Error importing CSV:", error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.error || "An unexpected error occurred."}`);
    }
  };
  const handleEditInventory = (id) => {
    navigate(`/edit-inventory/${id}`); // Navigate to EditInventory page
  };

  const handleDeleteInventory = async (id) => {
    try {
      await deleteInventoryItem(id);
      toast.success("Inventory item deleted successfully");
      fetchInventory(); // Refresh inventory after delete
    } catch (error) {
      console.error("Error deleting inventory item:", error.message);
      toast.error("Failed to delete inventory item");
    }
  };



  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Inventory Dashboard</h4>
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary me-2"
                      onClick={handleExportCSV}
                    >
                      Export CSV
                    </button>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleImportCSV}
                      style={{ display: "none" }}
                      id="import-csv-input"
                    />
                    <label htmlFor="import-csv-input" className="btn btn-sm btn-primary">
                      Import CSV
                    </label>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table datatable" id="datatable_1">
                    <thead className="table-light">
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Stock Level</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {inventory.map((item) => (
                          <tr key={item._id}>
                            <td>{item.itemName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                            <td>{item.supplierId?.name || "N/A"}</td>
                            <td className={getStockLevelClass(item.stockLevel)}>
                              {item.stockLevel}
                            </td>
                          <td>
                            <button
                              onClick={() => handleEditInventory(item._id)}
                              className="btn btn-sm btn-warning me-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteInventory(item._id)}
                              className="btn btn-sm btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
