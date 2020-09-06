import React, { useState, useEffect } from 'react';
import socket from './socket/socketio';
import './styloApp.css';
//import { getMensaje } from './helpers/fetchMensajes';

function App() {
  // eslint-disable-next-line 
  const [response, setResponse] = useState("");

  const [mensajes, setMensajes] = useState(['No hay mensajes'])

  const [newMensaje, setNewMensaje] = useState('');
  
  useEffect(() => {
    
    socket.on("Server", data => {
      setResponse(data);
    });

    getMensaje();

    socket.on('mensajeEmitido',(data)=>{
      console.log(data);
      getMensaje();
    });
    
    
  }, []);

  const getMensaje = async() => {

    const resp = await fetch('http://localhost:3000/api');
    const data = await resp.json();
    
    setMensajes(data);
  }
  

  
  return (
    <div className="container mt-5">
      <h1>{response}</h1>
      <div id="cuerpo" className="overflow-auto" >


        <ul className="list-group">
          
              
              {
                mensajes.map( (m,index) => {

                   return <li id={index}>{m.mensaje}</li>

                } )
              }
            
        </ul>

      </div>
      <div className="container mt-2">
        < input className="form-control" type="text" placeholder="mensaje nuevo" onChange={(e)=>{
          setNewMensaje(e.target.value);
        }}/>
      </div>
      <button className="btn btn-primary mt-2" onClick={()=>{
        socket.emit('mensaje',newMensaje,(res)=>{
          getMensaje();
          console.log(res);
        });
      }}>
        botton para mandar mensaje
        </button>
    </div>
  );
}

export default App;
