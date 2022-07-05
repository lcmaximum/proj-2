const Appointment = require('../models/appointment')


module.exports = {create}

function create(req,res) {
    Appointment.findById(req.params.id, function(err, appointment) {
    if (req.user._id != appointment.userId) {
        res.redirect('/appointments')
    } else 
     {
        const newTodo = req.body
        const userId =req.user._id
        appointment.preparations.push({userId: userId, act: newTodo, completed: false})
        
        console.log(appointment.preparations)
        appointment.save(function(err) {
            if (err) return res.redirect(`/appointments/${appointment._id}`)
        console.log(appointment);
        res.redirect(`/appointments/${appointment._id}/#get-ready`);
          });
        }
       
    })}