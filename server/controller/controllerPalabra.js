const controllerPalabra={};

const modelMensajes=require('../model/palabras');

controllerPalabra.mensaje= async(req,res)=>{
    const mensajes=await modelMensajes.find();
    return res.status(200).json(mensajes);
}     
controllerPalabra.primerMensaje=async(req,res)=>{
    mensajeP= new modelMensajes({mensaje:'hola mensaje1'});
    await mensajeP.save();
    return res.json('mensaje creado')
}    



module.exports=controllerPalabra;