
const mongoose= require('mongoose');

const URI = "mongodb://127.0.0.1:27017/";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('*****CONECTADO A LA BASE DE DATOS CON EXITO'))
    .catch(err => console.error(err+" ***ESE FUE EL ERROR DE CONEXION"));
module.exports = mongoose; 