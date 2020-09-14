import React, { useState, useContext } from 'react';
import { userContext } from '../../hooks/userContext';

export const Login = ({history}) => {
    
    const {user,setUser} = useContext(userContext);
    const setUserName=(userName)=>{
        setUser(userName);
        history.push('/chat');
    }
    const [value, setvalue] = useState('')
    return (
        <div className="container">
            <h1 className="display-1">  Elige tu Username: {user}</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setUserName(value);
                setvalue('');
                }}>
                <input required type="text" className="form-control mt-5" placeholder="Username" value={value} onChange={
                    (e)=>{
                        setvalue(e.target.value);
                    }} />
                <button className="btn btn-primary btn-block mt-2 mb-1"> Aceptar </button>
            </form>
        </div>
    )
}
