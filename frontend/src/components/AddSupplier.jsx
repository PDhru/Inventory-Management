import React, { useState } from "react";
import { addSupplier } from "../services/api"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSupplier = () => {
        const [formData, setFormData] = useState({
          name: "",
          contactDetails: {
            email: "",
            phone: "",
          },
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          if (name === "email" || name === "phone") {
            setFormData({
              ...formData,
              contactDetails: {
                ...formData.contactDetails,
                [name]: value,
              },
            });
          } else {
            setFormData({ ...formData, [name]: value });
          }
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            // Add supplier
            await addSupplier(formData);
            toast.success("Supplier added successfully!"); // Success toast
            setFormData({ name: "", contactDetails: { email: "", phone: "" } }); // Reset the form
          } catch (err) {
            toast.error(err.response?.data?.error || "Failed to add supplier. Please try again."); // Error toast
          }
        };
  return (
<div className="page-content">
  <div className="container-xxl">                    
    <div className="row">
      <div className="col-md-6 col-lg-12">
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">                      
                <h4 className="card-title">Custom Validation Form</h4>                      
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
            <form id="form-validation-2" className="form"onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" type="text" id="name"  value={formData.name} onChange={handleChange} name="name" placeholder="Enter name"required />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type="text" id="email" name="email"  value={formData.contactDetails.email} onChange={handleChange} placeholder="Enter email" required/>
              </div>
              <div className="mb-2">
                <label htmlFor="Phone" className="form-label">Phone Number</label>
                <input className="form-control" name='phone'  type="number" id="phone"  value={formData.contactDetails.phone} onChange={handleChange} placeholder="+91 7894551115" required/>
              </div>
              <button type="submit" className="btn btn-primary">Submit form</button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>

  )
}

export default AddSupplier