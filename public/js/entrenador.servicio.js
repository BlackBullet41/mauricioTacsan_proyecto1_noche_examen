'use strict';
function registrarEntrenador(paInfoEntrenador){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_entrenadores',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
          numEntrenador : paInfoEntrenador[0],
          nomEntrenador : paInfoEntrenador[1],
          edad : paInfoEntrenador[2],
          sexo : paInfoEntrenador[3]

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function obtenerListaEntrenadores(){
  let listaEntrenadores = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/listar_entrenadores',
      type : 'get',
      contentType : 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async : false,
      data:{
          
      }
    });
  
    peticion.done(function(response){
     respuesta = response;
    });
  
    peticion.fail(function(response){
     respuesta = response;
    });

    return respuesta;
  
  return listaEntrenadores;
}