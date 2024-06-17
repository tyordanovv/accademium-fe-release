import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero">
            <h1>Welcome to My App</h1>
            <p>This is a basic React app with a navbar and hero section.</p>
            <Link to="/survey">
                <button>Take Orientation Survey</button>
            </Link>
        </div>
    );
}

export default HeroSection;