'use strict';
const express = require('express');
const router = express.Router();
const entrenadores = require('./entrenadores.api');


router.route('/registrar_entrenadores')
    .post(function(req, res){
    entrenadores.registrarEntrenadores(req, res);
});

router.route('/listar_entrenadores')
    .get(function(req, res){
    entrenadores.listar(req, res);
});


module.exports = router;