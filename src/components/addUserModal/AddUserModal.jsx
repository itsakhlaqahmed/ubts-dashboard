import React, { useState } from "react";
import "./add-user-modal.css";
import { createDocument } from "../../firebase/firebaseService";

const AddUserModal = ({
  showModal,
  onCloseModal,
  collectionName,
  onSuccess,
}) => {
  const [isSendingData, setISendingData] = useState(false);

  const closeModal = (e) => {
    e.preventDefault();
    onCloseModal();
  };

  const addDriver = async (event) => {
    event.preventDefault();

    let driver = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      password: event.target.elements.password.value,
      about: event.target.elements.about.value,
    };

    setISendingData(true);
    try {
      await createDocument(driver, collectionName);
      console.log("driver created");
      event.target.reset();
      onCloseModal();
      onSuccess();
    } catch (err) {
      //handle err here
    }
    setISendingData(false);
  };

  return (
    // <div className="container">
    <div className={`modal-container ${showModal ? "show-modal" : null}`}>
      <div className="modal-title">
        <p>Add New Driver</p>
      </div>
      <div className="modal-form-container">
        <form onSubmit={addDriver}>
          <div className="form-input-group">
            <label htmlFor="name">Name*</label>
            <input name="name" type="text" placeholder="Driver Name" required />
          </div>
          <div className="form-input-group">
            <label htmlFor="email">Email*</label>
            <input
              name="email"
              type="text"
              placeholder="driver@email.com"
              required
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="phone">Phone*</label>
            <input
              name="phone"
              type="text"
              placeholder="03XX-XXXXXXXX"
              required
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Password*</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="about">About</label>
            <input
              name="about"
              type="text"
              placeholder="Write details about the driver..."
            />
          </div>

          <div className="btn-container">
            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="add-driver-btn">Add Driver</button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default AddUserModal;
