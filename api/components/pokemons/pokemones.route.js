'use strict';
const express = require('express');
const router = express.Router();
const pokes = require('./pokemones.api');


router.route('/registrar_pokemones')
    .post(function(req, res){
    pokes.registrarPokemones(req, res);
});

router.route('/listar_pokemones')
    .get(function(req, res){
    pokes.listar(req, res);
});


module.exports = router;