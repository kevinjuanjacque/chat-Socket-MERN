import React, { useState, useContext,  } from 'react';
import socket from '../socket/socket-io';
import { userContext } from '../hooks/userContext';


export const NewMsj = () => {

   
    const {user} = useContext(userContext);
    const [msjNuevo, setmsjNuevo] = useState('');
    return (
        <form className="container" onSubmit={(e)=>{
            e.preventDefault();
            const mensajeCreado={
                user:user,
                mensaje:msjNuevo
            };
            socket.emit('mensaje',mensajeCreado,(res)=>{
                console.log(res);
              });
            setmsjNuevo('');
            }}> 
            <input required id="NewMsj" className="form-control" placeholder="nuevo msj" value={msjNuevo} onChange={(e)=>{
                setmsjNuevo(e.target.value);
            }}/>

            <button className="btn btn-primary m-2"> enviar! </button>
        </form>
    )
}
