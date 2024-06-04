import React from 'react';
import home from './home.svg';
import icon from './icon.svg';
import orange from './orange.svg';
import check from './check.svg';
import game from './game.svg';
import settings from './settings.svg';
import help from './help.svg';
import divider from './divider.svg';

import './sidebar.css';

const Sidebar = () => {

  const handleImageClick = (imageName) => {
    console.log(`Clicked on ${imageName}`);
  };

  return (

    <div className="sidebar">

      <div className="sidebar-content">

        <button className="sidebar-image" onClick={() => handleImageClick('home')}>
          <img src={home} alt="home" />
        </button>

        <button className="sidebar-image" onClick={() => handleImageClick('check')}>
          <img src={icon} alt="icon" />
        </button>

        <button className="sidebar-image" onClick={() => handleImageClick('home')}
          style={{backgroundColor: '#FBEAE7', borderLeft: '2px solid #D54029'}}>
          <img src={orange} alt="orange" />
        </button>



        <button className="sidebar-image" onClick={() => handleImageClick('home')}>
          <img src={check} alt="check" />
        </button>



        <button className="sidebar-image" onClick={() => handleImageClick('home')}>
          <img src={game} alt="game" />
        </button>


        <img src={divider} style={{ marginTop:'15px',marginBottom:'5px' }} alt="divider" />


        <button className="sidebar-image" onClick={() => handleImageClick('home')}>
          <img src={settings} alt="settings" />
        </button>
        <button className="sidebar-image" onClick={() => handleImageClick('home')}>
          <img src={help} alt="help" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
