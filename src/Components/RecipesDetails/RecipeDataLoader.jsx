import React from 'react';
import { useLoaderData } from 'react-router-dom';


const RecipeDataLoader = () => {
    const data = useLoaderData();
    const {name, likes}=data;
    console.log(data);
    
   


    return (
        <div>
            <h1>{name}</h1>
            
        </div>
    );
};

export default RecipeDataLoader;
