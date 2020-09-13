import React, { useState,  } from 'react';
import socket from '../socket/socket-io';


export const NewMsj = () => {
   

    

   

    const [msjNuevo, setmsjNuevo] = useState('');
    return (
        <form className="container" onSubmit={(e)=>{
            e.preventDefault();
            socket.emit('mensaje',msjNuevo,(res)=>{
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
