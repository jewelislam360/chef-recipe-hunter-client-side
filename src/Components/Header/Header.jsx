import React from 'react';

const Header = () => {
    return (

        
        <div className='h-[20%]'>
            <div className="hero min-h-screen bg-slate-700 bg-blend-overlay" style={{ backgroundImage: `url("https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059050-50-LC-CAROUSEL-1.png")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;