const fs = require('fs');
var colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () =>{

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile('db/data.json', data, (err) => {
            if (err) throw new Error('No se pudo grabar', err);           
        });

}

let getListado = (completado) =>{    
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {       
        if(new Boolean(completado) === new Boolean(tarea.completado)){
            return tarea;    
        }        
    });

    return nuevoListado;
}

const cargarDB = () =>{
    
    try {
        listadoPorHacer = require('../db/data.json');   
    } catch (error) {
        listadoPorHacer = [];
    }    

}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if(listadoPorHacer.length === nuevoListado.length){                
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

const crear = (descripcion) =>{
    console.log(descripcion);
    let porHacer= {
        descripcion,
        completado: false
    }    
    cargarDB();
    listadoPorHacer.push(porHacer);   
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}