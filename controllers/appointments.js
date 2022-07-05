const Appointment = require('../models/appointment');

//module exports

module.exports = {
    index,
    show,
    new: newAppointment,
    create,
    delete: deleteAppointment

}

function index(req, res) {
  console.log(req.user._id)
Appointment.find({'userId': req.user._id}, function(err, appointments) {
    res.render('appointments/index', { title: 'All Appointments', appointments });
  });
}


function show(req, res) {
  Appointment.findById(req.params.id, function(err, appointment) {
   
    console.log('show page appointment'+ appointment)
    console.log(appointment.userId)
    res.render('appointments/show', { title: 'Appointment Detail', appointment });
  })

}
function newAppointment(req,res) {
    res.render('appointments/new', {title: 'Add new appointment'})
}

//function CREATE
function create(req, res) {  
    for (let key in req.body) {
        console.log(key);
        if (req.body[key] === '') delete req.body[key];
    }

    const appointment = new Appointment(req.body);
    appointment.userId = req.user._id

    console.log(appointment)
    
    appointment.save(function(err) {
      if (err) return res.redirect('/appointments/new');
      console.log(appointment);
      res.redirect('/appointments');
    });
  }

  function deleteAppointment(req, res) {
    Appointment.findByIdAndDelete(req.params.id, function (err) {
        if(err) console.log('Error');
        console.log('Successfully deleted.');

        res.redirect('/appointments');
    });
}
