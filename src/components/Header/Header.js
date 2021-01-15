import {  Switch, Tooltip } from '@material-ui/core';

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Index.css';
import i from './list.svg';
import j from './back.svg';


export const Header = ({set,darkmode}) => {
  const [trigger, settrigger] = useState(false);
  const navi = useNavigate();
  const [active, setactive] = useState('')
  return (
    <nav className="nav">
     <div className="content"> 
     <span className="TM">
     <span className='title' style={{cursor:"pointer"}}>
       <Tooltip title="Dark/Light Mode" aria-label="Dark/Light Mode">
      <Switch onClick={()=>{set(!darkmode)}}/></Tooltip>
       J.M.Q.G.H</span>
     <img className="menu" src={trigger ? j:i} alt="Humburger" onClick={()=>{settrigger(!trigger);}}></img>
     </span>
      <ul className={trigger ? 'UL':'NUL'}>
        <li className={active === 'home' ? 'activeLink':"home"} onClick={()=>{setactive("home");navi('/');settrigger(!trigger);}}>Home</li>
        <li className={active === 'events' ? 'activeLink':"events"} onClick={()=>{setactive("events");navi('/events');settrigger(!trigger);}}>Events</li>
        <li className={active === 'services' ? 'activeLink':"services"} onClick={()=>{setactive("services");navi('/services');settrigger(!trigger);}}>Services</li>
        <li className={active === 'about' ? 'activeLink':"about"} onClick={()=>{setactive("about");navi('/about');settrigger(!trigger);}}>About</li>
        <li className={active === 'contact' ? 'activeLink':"contact"} onClick={()=>{setactive("contact");navi('/contact');settrigger(!trigger);}}>Contact Us</li>
      </ul>
      </div>

      </nav>
  )
}
