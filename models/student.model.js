const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field required'
    },
    email:{
        type: String,
        required: 'this field required'
    },
    phone: {
        type: String,
        required: 'this field required'
    },
    city:{
        type: String,
        required: 'this field required'
    }
})

mongoose.model('Student', studentSchema);