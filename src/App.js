import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div><Sidebar /></div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px'}}>
          
          <div style={{ backgroundColor: '#F5F8F8', display: 'flex', flexDirection: 'column', flex: 1, lineHeight: '24.2px' }}>
            
            <p style={{ fontSize: '20px', fontWeight: '600', lineHeight: '24.2px', fontFamily: 'Poppins', textAlign: 'left', padding: '10px 30px', color: '#121114',margin:'0'}}>Profile
            </p>

            <div>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', margin: '0 30px'}}>
                <Page />
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '8px', margin: '10px 30px',marginBottom:'100%' }}>
                <Page2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
