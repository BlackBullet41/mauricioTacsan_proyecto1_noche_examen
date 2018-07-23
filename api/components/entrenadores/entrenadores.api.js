'use strict';
const entrenadoresModel = require('./entrenadores.model');

module.exports.registrarEntrenadores = function (req , res)
{
    
    let nuevoEntrenador = new entrenadoresModel({
        numEntrenador : req.body.numEntrenador,
        nomEntrenador : req.body.nomEntrenador,
        edad : req.body.edad,
        sexo : req.body.sexo
             
    });
  console.log(nuevoEntrenador);
   nuevoEntrenador.save(function(error)
   {
    if(error) {
    res.json
        ({ succes : false, msj : 'El entrenador no pudo ser registrado : ' + error})     
    }else{
    res.json
        ({ succes : true, msj : 'El entrenador se registro exitosamente : ' +error}) 
        }    
   });
};

module.exports.listar = function(req, res){
    entrenadoresModel.find().then(
        function(entrenadores){
            res.send(entrenadores);
        });
};
