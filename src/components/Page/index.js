import React, { useState } from "react";
import "./page.css";
import Button from '@mui/material/Button';
import BasicModal from "./Modal";


export default function PersonalDetailsForm() {
  const [firstName, setFirstName] = useState("Shopify");
  const [lastName, setLastName] = useState("012345");
  const [countryCode, setCountryCode] = useState("+1 ");
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const [email, setEmail] = useState("test@example.com");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('.....');
  const [newPassword, setNewPassword] = useState('.....');
  const [confirmPassword, setConfirmPassword] = useState('.....');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bordered-container">
      <div>
        <p style={{ fontWeight: "600", textAlign: "left", color: '#121114', fontSize: '14px', lineHeight: '16.94px' }}>Your details</p>
      </div>

      <hr className="divider" style={{ marginLeft: "-10px", marginRight: "-10px" }} />

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ display: "flex", color: '#5F5A6B' }}>
          <label style={{ textAlign: "left", width: "50%", marginRight: "10px" }}>
            First name *
            <input style={{ backgroundColor: 'white' }}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>

          <label style={{ textAlign: "left", width: "50%" }}>
            Last name *
            <input style={{ backgroundColor: 'white' }}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-group" style={{ display: "flex", textAlign: "left", color: '#5F5A6B' }}>
          <label style={{ textAlign: "left", width: "50%", marginRight: "10px" }}>
            Phone number *
            <div style={{ display: "flex" }}>
              <select
                style={{ display: "flex", width: "50px", marginRight: "10px", color: '#B6B2BD' }}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="mySelect"
              >
                <option value="+1">+1</option>
              </select>

              <input style={{ color: '#B6B2BD' }}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </label>

          <label style={{ textAlign: "left", width: "50%" }}>
            Email address *
            <input style={{ color: '#B6B2BD' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <hr className="divider" />

        <div className="button-group" style={{ display: "flex", justifyContent: "flex-end", gap: '15px',textAlign:'center' }}>
          <Button
            type="button"
            style={{ backgroundColor: "white", color: "black",border:'1px solid black',textTransform:"none"}}
            onClick={toggleModal} // Example: Opens or closes the modal
          >
            Update Password
          </Button>
          <Button
            type="submit"
            style={{ backgroundColor: "#colorValue", color: "#fff"}}>
            Save
          </Button>
        </div>
      </form>

      {isModalOpen && (
        <BasicModal
         isModalOpen={isModalOpen}
         setIsModalOpen={setIsModalOpen}
          oldPassword={oldPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setOldPassword={setOldPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
        />
      )}
    </div>
  );
}
