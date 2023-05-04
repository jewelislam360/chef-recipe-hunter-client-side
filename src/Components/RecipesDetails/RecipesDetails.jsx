import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeDataLoader from './RecipeDataLoader';


const RecipesDetails = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <RecipeDataLoader></RecipeDataLoader>
            <Footer></Footer>
        </div>
    );
};

export default RecipesDetails;