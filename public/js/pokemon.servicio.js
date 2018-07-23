function registrarpokemon(paInfopokemon){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_pokemones',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
          numPoke: paInfopokemon[0],
          nomPoke : paInfopokemon[1],
          tipoUno : paInfopokemon[2],
          tipoDos : paInfopokemon[3]

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}


function obtenerListaPokemones(){
  let listapokemones = [];

  let respuesta = '';
  let peticion = $.ajax({
      url : 'http://localhost:4000/api/listar_pokemones',
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
  
  return listapokemones;
}