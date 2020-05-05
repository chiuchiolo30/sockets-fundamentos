//============================================================================
// Requires
//============================================================================
const { io } = require('../server');



io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // cuando un usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // para que todos los clientes reciban la información
        client.broadcast.emit('enviarMensaje', data);


        /*  if (mensaje.usuario) {

             callback({
                 resp: 'TODO SALIO BIEN!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL!'
             });
         } */
    });
});