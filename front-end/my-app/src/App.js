import React, { useEffect,  } from 'react';
import { HookFetch } from './hooks/hookFetch';
import './styloApp.css';
import { NewMsj } from './component/newMsj';
import { BodyMensajes } from './component/BodyMensajes';
import socket from './socket/socket-io';

function App() {
  
  
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



      {loading && <h1>Cargando Mensajes...</h1>}
      <BodyMensajes a={mensjas} />
        

      <NewMsj />

      
    </div>
  );
}

export default App;
