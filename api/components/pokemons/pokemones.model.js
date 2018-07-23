'use strict';

let mongoose = require('mongoose');

let pokemonShema = new mongoose.Schema({
    numPoke : {type : String, require : true},
    nomPoke : {type : String,  require : true },
    tipoUno : {type : String,  require : true},
    tipoDos : {type : String , require : true}
});
module.exports = mongoose.model('pokemones', pokemonShema);