import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ textEntry}) => {
  
  const clearSearchBox = ()=>{
    if(textEntry && textEntry.current){
      if(typeof textEntry.current === "function"){
        textEntry.current("");
      }
    }
    
  };

  return (
    <nav className="main-nav">
      <ul>
        <li onClick={clearSearchBox}><NavLink to="/mountain">Mountain</NavLink></li>
        <li onClick={clearSearchBox}><NavLink to="/beach">Beaches</NavLink></li>
        <li onClick={clearSearchBox}><NavLink to="/bird">Birds</NavLink></li>
        <li onClick={clearSearchBox}><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
