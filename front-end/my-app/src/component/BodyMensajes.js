import React, { useContext } from 'react'
import '../styloApp.css';
import { userContext } from '../hooks/userContext';
export const BodyMensajes = ({a}) => {
  
    const {user} = useContext(userContext);
    return (
        <div id="mensajes"  className="container overflow-auto mt-5"  >
        <ul  className="list-group">
          {a.map((msj,index)=>{
            return <li className="list-group-item mt-3 mb-3" key={index}> 
                {
                  (msj.user===user) || <h3 className="font-weight-bold">{msj.user}:</h3>
                }
              <p className={`${(msj.user===user) && 'text-right'}`}>
                {msj.mensaje}
              </p> 
            </li>
          })}
        </ul>
      </div>
    )
}
