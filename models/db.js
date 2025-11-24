const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser
},
err=>{
    if(!err){
        console.log(`connection succcesded`);
    }else{
        console.log('error in connection', err);
    }
})

require('./student.model');