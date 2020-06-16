

const argv = require('yargs')
.command('listar', 'listar todas las tareas', {
    completado:{
        alias: 'c',
        default: true
    }
})
.command('crear', 'Crear la tarea', {
    descripcion:{
        demand: true,
        alias: 'd'
    }
})
.command('borrar', 'Borrar la tarea', {
    descripcion:{
        demand: true,
        alias: 'd'
    }
})
.command('actualizar', 'Actualizar la tarea ', {
    descripcion:{
        demand: true,
        alias: 'd'
    },
    completado:{
        alias: 'c',
        default: true
    }
})
.help()
.argv;

module.exports = {
    argv
}