'use strict';
const pokemonModel = require('./pokemones.model');

module.exports.registrarPokemones = function (req , res)
{
    
    let nuevoPokemon = new pokemonModel({
        numPoke : req.body.numPoke,
        nomPoke : req.body.nomPoke,
        tipoUno : req.body.tipoUno,
        tipoDos : req.body.tipoDos,
             
    });
  console.log(nuevoPokemon);
   nuevoPokemon.save(function(error)
   {
    if(error) {
    res.json
        ({ succes : false, msj : 'El proyecto no pudo ser registrado : ' + error})     
    }else{
    res.json
        ({ succes : true, msj : 'El proyecto se registro exitosamente : ' +error}) 
        }    
   });
};

module.exports.listar = function(req, res){
    pokemonModel.find().then(
        function(pokemones){
            res.send(pokemones);
        });
};
