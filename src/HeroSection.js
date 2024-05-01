import React from 'react';

const HeroSection = () => {
    const handleSurveyClick = () => {
        // Navigate to OrientationSurvey page
        
        // You can use react-router-dom's history or Link component
      };

    return (
        <div className="hero">
        <h1>Welcome to My App</h1>
        <p>This is a basic React app with a navbar and hero section.</p>
        <button onClick={handleSurveyClick}>Take Orientation Survey</button>
        </div>
    );
}

export default HeroSection;