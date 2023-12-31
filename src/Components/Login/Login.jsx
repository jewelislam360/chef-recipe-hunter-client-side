import React, { useContext, useState } from 'react';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';






const Login = () => {
    const [error, setError]= useState('');
    const [success, setSuccess]= useState('');
    // const auth = getAuth(app)
 const {user, setUser, signIn, googleSignin,auth} = useContext(AuthContext)
 const provider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
 

    const handelLogin=(event)=>{
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password).then(result=>{
            const loggedUser= result.user;
            setUser(loggedUser)
            console.log(loggedUser);
            form.reset();
            setError('');
            setSuccess('successfully User Login')

        }).catch(error =>{
            console.log(error.message);
            setError(error.message);
            setSuccess('')
        })

        

    }
    const hendelGoogleSinIn=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const loggedUser= result.user;
        console.log(loggedUser);


        })
        .catch(error=>{
            console.log(error);
        })

    }
    const handelGithubSignIn=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const loggedUser= result.user;
        console.log(loggedUser);


        })
        .catch(error=>{
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
                            <p className='text-red-500	'>{error}</p>
                                <p className='text-green-500	'>{success}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-success" type='submit'>Login</button>
                            </div>
                            
                        </form>
                        <div className='flex mx-auto  text-4xl gap-10 mb-5'>
                                <button onClick={hendelGoogleSinIn}><FaGoogle ></FaGoogle></button>
                                <button onClick={handelGithubSignIn}><FaGithub></FaGithub></button>
                             
                            </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;