import axios from "axios";

const API_BASE_URL = "https://inventory-management-mgdb.onrender.com/api"; // Replace with your backend's base URL if different

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Inventory APIs
export const getInventoryItems = () => api.get("/inventory");
export const addInventoryItem = (data) => api.post("/inventory", data);
export const updateInventoryItem = (id, data) => api.put(`/inventory/${id}`, data);
export const deleteInventoryItem = (id) => api.delete(`/inventory/${id}`);
export const getLowStockItems = () => api.get("/inventory/low-stock");

// Supplier APIs
export const getSuppliers = () => api.get("/suppliers");
export const addSupplier = (data) => api.post("/suppliers", data);
export const updateSupplier = (id, data) => api.put(`/suppliers/${id}`, data);
export const deleteSupplier = (id) => api.delete(`/suppliers/${id}`);


export const importCSV = (formData) =>
  api.post("/inventory/import", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const exportCSV = () => api.get("/inventory/export", { responseType: "blob" });


export const importSupplierCSV = (formData) =>
  api.post("/suppliers/import", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const exportSupplierCSV = () =>
  api.get("/suppliers/export", { responseType: "blob" });
