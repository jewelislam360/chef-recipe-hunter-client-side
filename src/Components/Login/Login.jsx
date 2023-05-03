import React from 'react';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-700">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Plase Login now!</h1>
                        
                    </div>
                    <Form>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                        </div>
                        <div className='flex mx-auto  text-xl color'>
                            <FaGoogle></FaGoogle> <FaGithub></FaGithub>
                        </div>
                        
                    
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;