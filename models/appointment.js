const mongoose = require('mongoose')
const Schema = mongoose.Schema

const packingSchema = new Schema({
coreItems: [{type: String, urgency: Number}],
addlItems: [{type: String, urgency: Number}]

})

const toDoSchema = new Schema({
userId: String,
actionItems: [{act: String, completed: Boolean}],
packingList: {packingSchema}
    
})

module.exports = mongoose.model('Todo', toDoSchema)

const contactSchema =new Schema( {
    contactName : {type: String,
        required: true},
    contactEmail : String,
    contactPhone: {type: Number, minlength: 10}
  })


const appointmentSchema = new Schema({
    userId: String,
    event: String,
    when: Date,
    where: String,
    leavingAt: Date,
    transportation: {type: String,
    enum: ['none','walk','bike','subway','rideshare', 'drive']},
    attendees: [contactSchema],
    preparations: [toDoSchema]

});

module.exports = mongoose.model('Appointment', appointmentSchema)