'use strict'
var mcliente = require('../Model/Mcliente.js');

exports.createCliente = function(req, res){
    
    var nombres = "Roy";
	var apellidos = "huamanta";
	var direccion = "la molina - lima";
	var fecha_nacimiento = "28/02/1998";
	var telefono = "967456378";
	var email = "royhuama@gmail.com";
    
        return mcliente.Cliente.create({
        id_persona: '',
        nombres: nombres,
        apellidos:apellidos,
        direccion: direccion,
        fecha_nacimiento: fecha_nacimiento,
        telefono: telefono,
        email: email
        
    },function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
   
}

var readCliente = function(req,res){
  return mcliente.Cliente.findAll().then(function(result){
      res.send(result);
  },function(err){
     res.send(err); 
  }) ;
}

module.exports.readCliente = readCliente;


exports.updateCliente = function (req, res){
    mcliente.Cliente.update({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    fecha_registro: req.body.fecha_registro,
    telefono: req.body.telefono,
    email: req.body.email
  },{
        where: {id_cliente : req.params.id_cliente}
    });
    return readCliente(req, res);
}


exports.deleteCliente = function (req, res){
    mcliente.Cliente.destroy({
        where: {
        id_cliente: req.params.id_cliente
        }
    });
     return readCliente(req, res);
}


exports.findOneCliente = function(req, res) { 
    var id_cliente = req.params.id_cliente;
    return mcliente.Cliente.findById(id_cliente).then(function(result) {
         res.send(result);
        if(result) res.status(200).send({message:'encontrado'});
        }, function(err){
        res.send(err);
    });
}

