import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="menu menu-horizontal px-1">
                        <Link className='mr-8' to={'/'}>Home</Link>
                        <Link className='mr-8' to={'/blog'}>Blog</Link>
                        <Link className='mr-8' to={'/login'}>Login</Link>
                        <Link className='mr-8' to={'/register'}>Sign Up</Link>
                        
                        
                    </div>
                    <div >
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;