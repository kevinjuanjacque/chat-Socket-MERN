import React from 'react'
import '../styloApp.css';
export const BodyMensajes = ({a}) => {
    return (
        <div id="mensajes"  className="container overflow-auto mt-5"  >
        <ul  className="list-group">
          {a.map((msj,index)=>{
            return <li className="list-group-item mt-3 mb-3" key={index}> {msj.mensaje} </li>
          })}
        </ul>
      </div>
    )
}
