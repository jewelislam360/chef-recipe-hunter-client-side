import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';




const RecipeDataLoader = () => {
    const data = useLoaderData();
    const { name, bio, likes, img, experience, recipes } = data;
    console.log(data);


   

    return (
        <div>
            <Navbar></Navbar>

            <div className="card lg:card-side bg-base-100 shadow-xl w-[75%] mx-auto my-20">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Bio: {bio}</p>
                    <p>Years of experience: {experience}</p>
                    <div>
                        <div className='flex justify-between'>
                            <h4>Number of recipe: {recipes.length}</h4>
                            <h4>  {likes}</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* _______________________________ */}
            <h1 className='text-4xl w-[75%] mb-10 mt-10 text-center mx-auto font-bold'>My Recipe</h1>
            <div className='grid grid-cols-3 gap-5 w-[75%] mx-auto	'>
                

            
                {
                   recipes.map(recipe=><div
                   key={recipes.length}
                   recipe = {recipe}


                   
                   >
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={recipe.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{recipe.recipeName}</h2>
                        <p><span className='font-bold'>Ingredients: </span> {recipe.ingredients}</p>
                        <p><span className='font-bold'>Method: </span> {recipe.cookingMethod}</p>
                        <div>
                            <div>Rating: {recipe.ating}</div>
                        </div>
                    </div>
                </div>
                    

                   </div>) 

                }

                

            </div>
            <Footer></Footer>


        </div>
    );
};

export default RecipeDataLoader;
