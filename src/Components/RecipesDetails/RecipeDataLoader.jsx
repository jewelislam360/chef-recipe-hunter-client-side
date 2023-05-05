import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('The Recipe is my favorite.');




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
                            <div className='flex gap-2 align-middle'>
                                <div><FaThumbsUp /></div>
                                <div>{likes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* _______________________________ */}
            <h1 className='text-4xl w-[75%] mb-10 mt-10 text-center mx-auto font-bold'>My Recipe</h1>
            <div className='grid grid-cols-3 gap-5 w-[75%] mx-auto	'>



                {
                    recipes.map(recipe => <div
                        key={recipes.length}
                        recipe={recipe}



                    >
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={recipe.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{recipe.recipeName}</h2>
                                <p><span className='font-bold'>Ingredients: </span> {recipe.ingredients}</p>
                                <p><span className='font-bold'>Method: </span> {recipe.cookingMethod}</p>
                                <div className='flex justify-between align-middle'>
                                    <div>
                                    <Rating
                                         placeholderRating={recipe.rating}
                                         readonly
                                         emptySymbol={<FaRegStar></FaRegStar>}
                                         placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                         fullSymbol={<FaStar></FaStar>}
                                         
                                        >
                                            
                                           
                                        </Rating>
                                        {recipe.rating}

                                    </div>
                                    <div className='flex gap-2 align-middle'>
                                        <div><FaThumbsUp /></div>
                                        <div>{recipe.likes}</div>
                                    </div>
                                    <div>
                                        <button onClick={notify} className="btn btn-accent">favorite
                                        <Toaster></Toaster>
                                        </button>
                                    </div>
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
