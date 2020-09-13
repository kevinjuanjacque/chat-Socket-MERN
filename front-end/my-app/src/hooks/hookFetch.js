import { useState, useEffect } from "react";

import {Contador} from '../helpers/contador';
import socket from "../socket/socket-io";

export const HookFetch = () => {

    
    
    
    const [data, seta] = useState({
        data:[],
        loading:true
    });
    
    useEffect(()=>{
        socket.on("mensajeCreado",(data)=>{
            console.log(data);
            Contador().then((data)=>{
                seta({data:data,
                    loading:false
                });
            });
        });
        Contador().then((data)=>{
            seta({data:data,
                loading:false
            });
        });

         
    },[]);

   


    return data;
}
