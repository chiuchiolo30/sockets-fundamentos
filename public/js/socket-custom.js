 /* ****************************************** 
   on: son para escuchar información del servidor
   emit: son para envíar información al servidor
   ********************************************** */

 var socket = io();

 /*  funciones que se disparan cuando recibímos información del servidor 
         o cuando enviamos información al servidor */


 // cuando se conecta al servidor
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 // cuando se desconecta del servidor
 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 });

 // enviar información servidor
 socket.emit('enviarMensaje', {
     usuario: 'Edgardo',
     mensaje: 'Hola mundo'
 }, function(resp) {
     // para la retroalimentación
     console.log('Respuesta server: ', resp);
 });

 // escuchar información del servidor
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor: ', mensaje);
 });