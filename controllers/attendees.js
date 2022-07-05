const Appointment = require('../models/appointment');

module.exports = {
    create,
    delete: deleteAttendee,

};


function create(req, res) {

    Appointment.findById(req.params.id, function(err, appointment) {
        if (appointment.userId != req.user._id) { 
            res.redirect('/appointments')
        } else {
        console.log(req.body)
        appointment.attendees.push(req.body)
        console.log(appointment)
        appointment.save(function(err) {
            res.redirect(`/appointments/${appointment._id}`);
        })}
    } )
    }

function deleteAttendee(req, res) {

    Appointment.findOne({ "attendees._id" : req.params.id }, function(err, appointment) {
        appointment.attendees.id(req.params.id).remove();

        appointment.save(function(err) {
            res.redirect(`/appointments/${appointment._id}`)
        })
    });
}

function returnToAppointment(req, res) {
    Appointment.findById(req.params.id, function(err, appointment) {
        res.redirect(`/appointments/${appointment._id}`);
    });
}