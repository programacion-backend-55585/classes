
process.on('exit', code => {
    console.log('Esta funcion se ejecuta antes de salir del proceso')
})

process.on('uncaughtException', code => {
    console.log('Una exception no ha sdo controlada')
})

process.on('message', message => {
    console.log('Esta funcion recibio un mensaje de otro proceso')
})

console.log('INIT process 🌃')
console()