import React from 'react';
import './style/Main.scss';

const HeroSection = () => {
    return (
        <div className="row justify-content-md-center hero-section-container">
            <div className="container text-center">
                <h1>dine</h1>
                <h5>Exquisite dining since 1989</h5>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <div className="button text-uppercase">Book A Table</div>
            </div>
        </div>
    )
}

export default HeroSection;