import React from 'react';

const Header = () => {
    return (

        
        <div className='h-[20%]'>
            <div className="hero min-h-screen bg-slate-700 bg-blend-overlay" style={{ backgroundImage: `url("https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059050-50-LC-CAROUSEL-1.png")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-green-400"> Welcome to Cookiteer </h1>
                        <p className="mb-5">Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out</p>
                        <button className="btn btn-success">Get Started</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;