import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider'

const Register = () => {
    const {user, createUser,} = useContext(AuthContext)
    console.log(createUser)
    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const imgurl=form.imgurl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imgurl, email, password);

        createUser(email, password, name, imgurl)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            

            

        })
        .catch(error =>{
            console.log(error)
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        You have an account?<Link to="/login">Login</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">Sign Up</button>
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