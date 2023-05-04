import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const OurChef = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])
    return (
        
            <div><h1 className='text-4xl w-[75%] mb-10 mt-10 text-center mx-auto font-bold' >Chef Details</h1>
            <div className='grid grid-cols-3 gap-5 w-[75%] mx-auto	'>

            {
                chef.map(chef => <div
                    key={chef.id}

                >
                    <div className=''>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={chef.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{chef.name}</h2>
                                <p>Years of experience: {chef.experience}</p>
                                <div>
                                    <div className='flex justify-between'>
                                        <h4>Number of recipe: {chef.recipes.length}</h4>
                                        <h4> {chef.likes}</h4>
                                    </div>
                                </div>
                                <div className="card-actions  text-center">
                                    <button className="btn btn-success"><Link to={`/viewdetails/${chef.id}`}>View Recipe</Link></button>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>


                </div>)
            }


        </div>
        </div>
    );
};

export default OurChef;