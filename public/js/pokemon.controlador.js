'use strict';

imprimirListaPokemones();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosPokemones);

let inputNumeroPokemon = document.querySelector('#txtNumPokedex');
let inputNombrePokemon = document.querySelector('#txtNombrePoke');
let inputTipoUno = document.querySelector('#txtTipoPokemon1');
let inputTipoDos = document.querySelector('#txtTipoPokemon2');


function obtenerDatosPokemones(){
    let infoPokemon = [];
    let nNumeroPokemon = inputNumeroPokemon.value;
    let nNombrePokemon = inputNombrePokemon.value;
    let nTipoUno = inputTipoUno.value;
    let nTipoDos = inputTipoDos.value;
    
    infoPokemon.push(nNumeroPokemon,nNombrePokemon,nTipoUno,nTipoDos)
    
    registrarpokemon(infoPokemon);
    
        imprimirListaPokemones();
        //limpiarFormulario();
    }


function imprimirListaPokemones(){
    let listaPokemones = obtenerListaPokemones();
    let tbody = document.querySelector('#tblPokemons tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemones.length; i++){
        let fila = tbody.insertRow();
            let cNumeroPokemon = fila.insertCell();
            let cNombrePokemon = fila.insertCell();
            let cTipoUno = fila.insertCell();
            let cTipoDos = fila.insertCell();
     
            
    
            cNumeroPokemon.innerHTML = listaPokemones[i]['numPoke'];
            cNombrePokemon.innerHTML = listaPokemones[i]['nomPoke'];
            cTipoUno.innerHTML = listaPokemones[i]['tipoUno'];
            cTipoDos.innerHTML = listaPokemones[i]['tipoDos'];
 
    }

};


    function limpiarFormulario(){
       inputNumeroPokemon.value = '';    
        inputNombrePokemon.value = '';
        inputTipoUno.value ='';
        inputTipoDos.value = '';
  
    }




