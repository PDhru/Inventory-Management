import React, { useEffect, useState } from "react";
import { getSuppliers, exportSupplierCSV, importSupplierCSV, deleteSupplier } from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await getSuppliers();
      setSuppliers(response.data);
    } catch (error) {
      console.error("Error fetching suppliers:", error.message);
    }
  };

  const handleExportSupplierCSV = async () => {
    try {
      const response = await exportSupplierCSV();
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "suppliers.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error exporting supplier CSV:", error.message);
    }
  };

  const handleImportSupplierCSV = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await importSupplierCSV(formData);
      console.log("Import successful:", response.data);
      fetchSuppliers(); // Refresh suppliers after import
    } catch (error) {
      console.error("Error importing supplier CSV:", error.message);
    }
  };

  const handleDeleteSupplier = async (id) => {
    try {
      await deleteSupplier(id);
      toast.success("Supplier deleted successfully");
      fetchSuppliers(); // Refresh suppliers after deletion
    } catch (error) {
      console.error("Error deleting supplier:", error.message);
      toast.error("Failed to delete supplier");
    }
  };
  const handleEditSupplier = (id) => {
    navigate(`/edit-supplier/${id}`); 
  };


  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card w-100">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col d-flex justify-content-between">
                    <h4 className="card-title">Supplier Management</h4>
                    <div className="col-auto">
                    <button type="button" className="btn btn-sm btn-secondary me-2"onClick={handleExportSupplierCSV} > Export CSV </button>
                    <input type="file" accept=".csv" onChange={handleImportSupplierCSV} style={{ display: "none" }} id="import-supplier-csv-input" />
                    <label htmlFor="import-supplier-csv-input" className="btn btn-sm btn-secondary" > Import CSV </label> 
                  </div>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table datatable" id="datatable_1">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {suppliers.map((supplier) => (
                        <tr key={supplier._id}>
                          <td>{supplier.name}</td>
                          <td>{supplier.contactDetails.phone}</td>
                          <td>{supplier.contactDetails.email}</td>
                          <td>
                            {/* Edit and Delete Icons */}
                            <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditSupplier(supplier._id)} >
                          <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteSupplier(supplier._id)} >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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

export default SupplierManagement;
