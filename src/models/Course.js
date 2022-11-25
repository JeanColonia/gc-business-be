const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    nombre:{type: String, required:true},
    imagenLink:{type:String, required:true},
    descripcion:{type: String, required:true},   
    modalidad:{type: String, required:true},
    categoria:{type: String, required:true},
    inicio_clases:{type: String, required:true},
    duracion:{type: String, required:true},
    valoracion:{type:Number, required:false},
    horario:{type: String, required:true},
    inversion:{type: Number, required:true},
    contenido:{type: String, required:true},
    tags:{type: Array, required:false},
    docente:{type: String, required:true},
    descuentos:{type: Array, required:false},
    requisitos:{type: String, required:true},
},{
    timestamps:true,
    versionKey:false, 
});

module.exports = model("Course", courseSchema);

