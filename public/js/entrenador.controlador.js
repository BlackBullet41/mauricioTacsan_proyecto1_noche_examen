'use strict';

imprimirListaEntrenadores();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener ('click' , obtenerDatosEntrenadores);

let inputNumeroEntrenador = document.querySelector('#txtNumEntrenador');
let inputNombreEntrenador = document.querySelector('#txtNombreEntrenador');
let inputEdad = document.querySelector('#txtEdad');
let inputSexo = document.querySelector('#slcSexo');


function obtenerDatosEntrenadores(){
    let infoEntrenador = [];
    let nNumeroEntrenador = inputNumeroEntrenador.value;
    let nNombreEntrenador = inputNombreEntrenador.value;
    let nEdad = inputEdad.value;
    let nSexo = inputSexo.value;
    
    infoEntrenador.push(nNumeroEntrenador,nNombreEntrenador,nEdad,nSexo)
    
        registrarEntrenador(infoEntrenador);
    
        imprimirListaEntrenadores();
        //limpiarFormulario();
    }


function imprimirListaEntrenadores(){
    let listaEntrenadores = obtenerListaEntrenadores();
    let tbody = document.querySelector('#tblEntrenadores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        let fila = tbody.insertRow();
            let cNumeroEntrenador = fila.insertCell();
            let cNombreEntrenador = fila.insertCell();
            let cEdad = fila.insertCell();
            let cSexo = fila.insertCell();
     
            
    
            cNumeroEntrenador.innerHTML = listaEntrenadores[i]['numEntrenador'];
            cNombreEntrenador.innerHTML = listaEntrenadores[i]['nomEntrenador'];
            cEdad.innerHTML = listaEntrenadores[i]['edad'];
            cSexo.innerHTML = listaEntrenadores[i]['sexo'];
 
    }

};


    function limpiarFormulario(){
        inputNumeroEntrenador.value = '';    
        inputNombreEntrenador.value = '';
        inputEdad.value ='';
        inputSexo.value = '';
  
    }




