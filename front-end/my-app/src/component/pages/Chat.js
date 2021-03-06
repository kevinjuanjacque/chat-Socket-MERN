import React, { useEffect,  } from 'react';
import { HookFetch } from '../../hooks/hookFetch';
import '../../styloApp.css';
import { NewMsj } from '../newMsj';
import { BodyMensajes } from '../BodyMensajes';
import socket from '../../socket/socket-io';

function Chat({history}) {

    
  
   const {data:mensjas,loading}=HookFetch();
  
  useEffect(()=>{
    socket.on("Server",(data)=>{
      console.log(data);
    });
  },[])

  useEffect(()=>{
    document.getElementById("mensajes").scrollTop=document.getElementById("mensajes").scrollHeight;
  },[mensjas])

  return (
    <div>

      <div className="container" >
      <h1> BIENVENIDOS AL CHAT MERN SOCKET.IO</h1>
      </div>

      {loading && <h1>Cargando Mensajes...</h1>}
      <BodyMensajes a={mensjas} />
        

      <NewMsj />

      
    </div>
  );
}

export default Chat;
