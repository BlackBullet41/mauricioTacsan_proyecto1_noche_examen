'use strict';

let mongoose = require('mongoose');

let entrenadorShema = new mongoose.Schema({
    numEntrenador : {type : String, require : true},
    nomEntrenador : {type : String,  require : true },
edad : {type : String,  require : true},
sexo : {type : String , require : true}
});
module.exports = mongoose.model('entrenadores', entrenadorShema);