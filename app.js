const { crear, guardarDB } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');

const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch( comando ){
    case 'crear':
        console.log('crear la tarea: ' + argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);        
    break;

    case 'listar':
        let listadoTarea = porHacer.getListado(argv.completado);

        for(let tarea of listadoTarea){
            console.log('=======Por Hacer========'.green)
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================'.green)
        }

    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':        
        let tareaBorrar = porHacer.borrar(argv.descripcion);        
        console.log(tareaBorrar);
    break;    

    default:
        console.log('no existe el comando');
    break;
}