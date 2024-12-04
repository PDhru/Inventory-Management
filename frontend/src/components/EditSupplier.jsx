import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateSupplier } from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const EditSupplier = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({
    name: "",
    contactDetails: {
      phone: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    try {
      const response = await updateSupplier(id);
      const data = response.data;
      setSupplier({
        name: data.name || "",
        contactDetails: {
          phone: data.contactDetails?.phone || "", 
          email: data.contactDetails?.email || "", 
        },
      });
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching supplier:", error.message);
      toast.error("Failed to load supplier data");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier((prev) => ({
      ...prev,
      [name]: name === "name" ? value : prev[name],
      contactDetails: {
        ...prev.contactDetails,
        [name]: value,
      },
    }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSupplier(id, supplier);
      toast.success("Supplier updated successfully");
      navigate("/suppliers"); 
    } catch (error) {
      console.error("Error updating supplier:", error.message);
      toast.error("Failed to update supplier");
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edit Supplier</h4>
              </div>
              <div className="card-body pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={supplier.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={supplier.contactDetails.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={supplier.contactDetails.phone || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Supplier
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

export default EditSupplier;
