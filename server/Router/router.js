

const express= require('express');
const router = express.Router();
const controllerMensajes=require('../controller/controllerPalabra');
const controllerPalabra = require('../controller/controllerPalabra');


router.get('/api', controllerMensajes.mensaje ); 
router.get('/api/1', controllerPalabra.primerMensaje );


module.exports=router;