const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema  = new Schema({

    name: {
        type : String,
        writeable : true
    }, 
    date : {
      type : String,
      writeable : true  
    }, 
    departure : {
        type : String,
        writeable : true
    }, 
    arrival : {
        type : String,
        writeable : true
    },
    location : {
        type : String,
        writeable : true
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

