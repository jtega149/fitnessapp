import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    const [currLink, setCurrLink] = useState('/');
  return (
    <div className="Navbar">
        <header className="Nav-Header">
            <h1>Ortega Fitness App</h1>
        </header>
        <div className="Nav-Links">
            <ul>
                <li onClick={()=>{setCurrLink('/')}}><a href="/">Home</a></li>
                <li onClick={()=>{setCurrLink('/food')}}><a href="/food">Food</a></li>
                <li onClick={()=>{setCurrLink('/exercise')}}><a href="/exercise">Exercise</a></li>
            </ul>
        </div>
        <div className="profile">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <span>John Doe</span>
        </div>
    </div>
  );
}

export default Navbar