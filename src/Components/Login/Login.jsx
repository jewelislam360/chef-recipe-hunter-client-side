import React, { useContext } from 'react';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
 const {user, signIn} = useContext(AuthContext)
 

    const handelLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();

        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-700">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                        
                    </div>
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    Are you new this site?<Link to="/register">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex mx-auto  text-4xl gap-10 mb-5'>
                            <FaGoogle></FaGoogle> <FaGithub></FaGithub>
                            </div>
                        </form>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;