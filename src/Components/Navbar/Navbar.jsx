import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handelLogout = ()=>{
        logOut()
        .then(()=>{

        })
        .catch(()=>{
            console.log(error)
        })
    }
    return (
        <div className=" bg-base-200">
            <div className=" navbar w-[75%] mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost "><img className='h-12	' src={logo} alt="" /></a>
                </div>
                <div className="flex-none gap-2">
                    <div className="menu menu-horizontal px-1">
                        <Link className='mr-8' to={'/'}>Home</Link>
                        <Link className='mr-8' to={'/blog'}>Blog</Link>
                        <Link className='mr-8' to={'/viewdetails'}>Details</Link>

                        <Link className='mr-8' to={'/register'}>Sign Up</Link>


                    </div>
                    <div >
                        {
                            user ? <div className='flex'>

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>

                                </label>
                                <div>
                                    <Link className='mr-8' onClick={handelLogout}>Logout</Link>
                                </div>
                            </div>
                                :
                                <Link className='mr-8' to={'/login'}>Login</Link>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;