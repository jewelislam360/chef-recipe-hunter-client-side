import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider'

const Register = () => {
    const [error, setError]= useState('');
    const [success, setSuccess]= useState('');
    const {user, createUser,updateUserProfileFunc} = useContext(AuthContext)
    console.log(createUser)
    const handelRegister = (event) => {
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const imgurl=form.imgurl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imgurl, email, password);

        createUser(email, password).then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setError('');
            setSuccess('successfully User Create')
            updateUserProfileFunc(loggedUser, name, imgurl).then(() => {
                // console.log('successfully user update');
            }).catch(e => {
                console.log(e.message)
            })
            
        }).catch(error =>{
            console.log(error.message)
            setError(error.message);
            setSuccess('')
        })
    }

        return (
            <div>
                <div className="hero min-h-screen bg-base-700">
                    <div className="hero-content flex-col ">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Please Sign up now!</h1>

                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <Form onSubmit={handelRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Img URL</span>
                                    </label>
                                    <input type="text" name="imgurl" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        You have an account?<Link to="/login">Login</Link>
                                    </label>
                                </div>
                                <p className='text-red-500	'>{error}</p>
                                <p className='text-green-500	'>{success}</p>
                                <div className="form-control mt-6">
                                    <button  className="btn btn-success" type="submit">Sign Up</button>
                                </div>
                            </Form>
                            
                            <div className='flex mx-auto  text-4xl gap-10 mb-5'>
                                <FaGoogle></FaGoogle> <FaGithub></FaGithub>
                            </div>


                        </div>

                    </div>
                </div>
            </div>


        );
    };

    export default Register;