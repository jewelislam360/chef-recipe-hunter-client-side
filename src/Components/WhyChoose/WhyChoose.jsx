import React from 'react';
import section1 from '../../assets/section1.png'
import section2 from '../../assets/f1.png'
import section3 from '../../assets/f2.png'
import section4 from '../../assets/f3.png'
import section5 from '../../assets/f4.png'


const WhyChoose = () => {
    return (
        <div>
            <div className='w-[75%] mb-10 mt-10 text-center mx-auto'>
                <h1 className='text-4xl font-bold pb-8 pt-8'>Why Choose Us</h1>
                <p className='w-[50%] mx-auto'>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant</p>
            </div>
            <div className='flex gap-5 w-[75%] mx-auto'>
                <div className='shrink w-[60%]' shrink w-64><img className='h-auto' src={section1} alt="" /></div>

                <div className='shrink w-[40%]'>
                    <h1>Why Choose Us</h1>
                    <p >Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>

                    <p>Mariano is a place for peace lovers where you can indulge yourself into enchanting bliss of colossal contours of Pines Golf Course and when you are done with golfing, eat at Mariano Restaurant , and chill and relax at Gold Fitness Club & Spa.</p>
                </div>
            </div>
            <hr className='border w-[75%] mb-10 mt-10 text-center mx-auto'></hr>

            <div className='pt-8 pb-8'>
                <div className='w-[75%] mb-10 mt-10 text-center mx-auto'>
                    <h1 className='text-4xl font-bold pb-8 pt-8'>Our Specialties
                    </h1>
                    <p className='w-[50%] mx-auto' >Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant</p>
                </div>
                

                <div>
                    <div className='flex w-[75%] mb-10 mt-10 mx-auto gap-2'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={section2} alt="Shoes" className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Easy Reservation</h2>
                                <p>Our products are hand picked and prepared for your convenience. We take care of all the fat, bones and waste so the food is ready to use. Products are individually quick dry frozen for extra quality and freezer life.</p>

                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={section3} alt="Shoes" className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Easy Reservation</h2>
                                <p>Our products are hand picked and prepared for your convenience. We take care of all the fat, bones and waste so the food is ready to use. Products are individually quick dry frozen for extra quality and freezer life.</p>

                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={section4} alt="Shoes" className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Easy Reservation</h2>
                                <p>Our products are hand picked and prepared for your convenience. We take care of all the fat, bones and waste so the food is ready to use. Products are individually quick dry frozen for extra quality and freezer life.</p>

                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={section5} alt="Shoes" className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Easy Reservation</h2>
                                <p>Our products are hand picked and prepared for your convenience. We take care of all the fat, bones and waste so the food is ready to use. Products are individually quick dry frozen for extra quality and freezer life.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default WhyChoose;