import React, {useState} from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const getSubSections = () => {
        switch (activeSection) {
            case 'home':
                return ['HOME', 'GOALS', 'CHECKIN'];
            case 'food':
                return ['FOOD DIARY', 'DATABASE', 'MY FOODS AND MEALS'];
            case 'exercise':
                return ['EXERCISE DIARY', 'DATABASE', 'MY WORKOUTS'];
            default:
                return [];
        }
    };

    const getSubSectionPath = (subSection) => {
        const sectionBase = activeSection === 'home' ? '' : `/${activeSection}`;
        const subSectionSlug = subSection.toLowerCase().replace(/\s+/g, '-');
        return `${sectionBase}/${subSectionSlug}`;
    };

 return (
    <>
        <div className="Navbar">
            <header className="Nav-Header">
                <h1>Ortega Fitness App</h1>
            </header>
            <div className="Nav-Links">
                <ul>
                    <li className={location.pathname.startsWith('/') && !location.pathname.includes('/food') && !location.pathname.includes('/exercise') ? 'active' : ''}>
                        <Link to="/" onClick={() => handleSectionClick('home')}>Home</Link>
                    </li>
                    <li className={location.pathname.startsWith('/food') ? 'active' : ''}>
                        <Link to="/food/food-diary" onClick={() => handleSectionClick('food')}>Food</Link>
                    </li>
                    <li className={location.pathname.startsWith('/exercise') ? 'active' : ''}>
                        <Link to="/exercise/exercise-diary" onClick={() => handleSectionClick('exercise')}>Exercise</Link>
                    </li>

                </ul>
            </div>
            <div className="profile">
                <img src="https://via.placeholder.com/50" alt="Profile" />
                <span>John Doe</span>
            </div>
        </div>
        <div className="Sub-Navbar">
            <ul>
                {getSubSections().map((subSection) => (
                    <li key={subSection} className={location.pathname === getSubSectionPath(subSection) ? 'active' : ''}>
                        <Link to={getSubSectionPath(subSection)}>{subSection}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default Navbar