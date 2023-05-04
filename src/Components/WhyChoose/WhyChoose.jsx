import React from 'react';
import section1 from '../../assets/section1.png'

const WhyChoose = () => {
    return (
        <div>
            <div className='w-[75%] mb-10 mt-10 text-center mx-auto'>
                <h1 className='text-4xl font-bold'>Why Choose Us</h1>
                <p>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant</p>
            </div>
            <div className='flex gap-5 w-[75%] mx-auto'>
                <div><img className='h-auto' src={section1} alt="" /></div>

                <div>
                <h1>Why Choose Us</h1>
                <p>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>

                <p>Mariano is a place for peace lovers where you can indulge yourself into enchanting bliss of colossal contours of Pines Golf Course and when you are done with golfing, eat at Mariano Restaurant , and chill and relax at Gold Fitness Club & Spa.</p>
            </div>
            </div>
            

        </div>
    );
};

export default WhyChoose;