var cliente = require('./Controller/ConCliente.js');

module.exports = function(app) {
	app.get('/api/cliente', cliente.readCliente); 
	app.get('/api/cliente/:id_cliente', cliente.findOneCliente); 
	app.post('/api/cliente', cliente.createCliente); 
	app.put('/api/cliente/:id_cliente', cliente.updateCliente); 
	app.delete('/api/cliente/:id_cliente', cliente.deleteCliente); 
    
};