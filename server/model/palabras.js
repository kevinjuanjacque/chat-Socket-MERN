const mongoose = require('mongoose');
const {Schema} =mongoose;

const mensajeShema = new Schema ({
    user:{type:String},
    mensaje :{type: String, },
})

module.exports= mongoose.model('mensajes',mensajeShema)