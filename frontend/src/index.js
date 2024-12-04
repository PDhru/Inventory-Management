

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InventoryDashboard from './components/InventoryDashboard';
import SupplierManagement from './components/SupplierManagement';
import Layout from './components/Layout';
import AddSupplier from './components/AddSupplier';
import AddInventory from './components/AddInventory';
import EditSupplier from './components/EditSupplier';
import EditInventory from './components/EditInventory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<InventoryDashboard />} />
      <Route path="/suppliers" element={<SupplierManagement />} />
      <Route path="/add-suppliers" element={<AddSupplier />} />
      <Route path="/edit-supplier/:id" element={<EditSupplier />} />
      <Route path="/add-inventory" element={<AddInventory />} />
      <Route path="/edit-inventory/:id" element={<EditInventory />} />
      
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>
);
