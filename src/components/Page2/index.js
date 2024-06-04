import React, { useState } from 'react';
import './page2.css';

function PersonalDetailsForm() {
  const [Companyname, setFirstName] = useState('Organisation');
  const [Industry, setIndustry] = useState('');
  const [Location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bordered">
      <p style={{ fontWeight: "600", textAlign: "left", fontFamily: 'Poppins', color: '#121114', fontSize: '14px', lineHeight: '16.94px' }}>Company details</p>

      <hr class="divider" style={{marginLeft: "-10px", marginRight: "-10px"}}></hr>

      <form onSubmit={handleSubmit}>

        <div className="form-group" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#5F5A6B'}}>
          <label style={{ textAlign: "left", width: "50%"}}>
            Company name *
            <input style={{ backgroundColor: 'white', color: '#B6B2BD' }}
              type="text" value={Companyname} onChange={e => setFirstName(e.target.value)} required />
          </label>


          <label style={{ textAlign: "left", width: "50%" }}>
            <div style={{ paddingLeft: "10px" }}>
              Which Industry do you operate in?
            </div>
            <select style={{ display: "flex", width: "99%", marginLeft: "10px", color: '#B6B2BD' }} value={Industry} onChange={e => setIndustry(e.target.value)} required className="mySelect">
              <option value="">Select</option>
            </select>
          </label>
        </div>

        <div className="form-group" >
          <label style={{ textAlign: "left", width: "50%", color: '#5F5A6B' }}>
            Where are you located? *
            <div>
              <select style={{ display: "flex", width: "100%", marginRight: "10px", color: '#B6B2BD' }} value={Location} onChange={e => setLocation(e.target.value)} required className="mySelect">
                <option value="">Country</option>
              </select>
            </div>
          </label>
        </div>



        <hr class="divider"></hr>




        <div className="button-group" style={{ display: "flex", justifyContent: "flex-end", gap: '4px', }}>
          <div>
            <button type="submit" style={{
              backgroundColor: "#FBEAE7",
              border: "1px solid #FBEAE7",
              color: "black",
              marginRight: "10px"

            }}>Home</button>
          </div>
          <div >
            <button type="submit">Save</button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default PersonalDetailsForm;
