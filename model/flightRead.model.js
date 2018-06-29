const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema  = new Schema({

    name : {
     type: String,
     writeable : false 
    } ,
    date : {
        type : String,
        writeable : false
    },
    departure : {
        type : String,
        writeable : false
    },
    arrival : {
        type : String,
        writeable : false
    },
    location : {
       type : String,
       writeable : false 
    } 
     
}, {
    timestamps: true
});
const Flight = mongoose.model('flight', flightSchema);

// const flight = new Flight({
//     name: 'testflight',
//     date: '06-05-2018',
//       departure : '12:00',
//       arrival : '14:00',
//      location : 'Amsterdam'
// }).save();

module.exports = Flight;

