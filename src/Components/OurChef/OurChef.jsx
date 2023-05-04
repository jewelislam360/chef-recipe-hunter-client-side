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
        <div>
            {
                chef.map(chef => <div
                    key={chef.id}

                >
                    <div className='flex gap-5'>
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
    );
};

export default OurChef;