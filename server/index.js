const Express=require('express');
const app = new Express();

const morgan=require('morgan');
const rutas= require('./Router/router');
const { mongoose } = require('./database')
const cors = require('cors');

const modelMensajes=require('./model/palabras');
const { mensaje } = require('./controller/controllerPalabra');


app.set('port',process.env.PORT || 3000);


app.use(Express.json());
app.use(morgan('dev'));
app.use(cors());


app.use(rutas);


const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => { 

    console.log('conectado');
    //mensaje desde el server a usuario conectado
    socket.emit("Server",'hola desde el serve');

    //mensaje recibido desde usuario al server
    socket.on('mensaje', async (data, callback) => {
        console.log(data);
        //se guarda en la bd
        mensajeNuevo=new modelMensajes({mensaje:data});
        await mensajeNuevo.save();

        //emite a todos los que escuchan
        socket.broadcast.emit('mensajeEmitido', data);
        
        //se realiza la llamada de respuesta
        callback({
            resp:'Mensaje enviado'
        })
    });

    //usuario desconectado
    socket.on('disconnect', ()=>{
        console.log('disconnected');
    });


 });

server.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});