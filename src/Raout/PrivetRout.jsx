import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if(user){
        return children;

    }
    return <Navigate to="/login" replace={true}></Navigate>
    
};

export default PrivetRout;