var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Flight = require('../model/flight.model');


routes.get('/flights', function (req, res) {
    res.contentType('application/json');

    Flight.find({})
        .then(function (flights) {
            res.status(200).json(flights);
        })
        .catch((error) => {
        res.status(400).json(error);
    });
});


routes.get('/flights/:id', function (req, res) {
    res.contentType('application/json');
    Flight.findOne({ _id: req.params.id })
        .then(function (flights) {
            res.status(200).json(flights);
        })
        .catch((error) => {
        res.status(400).json(error);
    });
});


routes.post('/flights', function (req, res) {
    const b = req.body;

    const flight = new Flight({

        name: b.name,
        date : b.date,
        departure : b.departure,
        arrival : b.arrival,
        location : b.location
    });
    flight.save()
        .then(() => res.status(200).json(flight))
    .catch((error) => res.status(400).json(flight));

});


routes.put('/flights/:id', function (req, res) {

    const b= req.body;

    const flight = new Flight({
        name: b.name,
        date : b.date,
        departure : b.departure,
        arrival : b.arrival,
        location : b.location
    });
    Flight.findOneAndUpdate({ _id: flight._id }, { $set: {
        name: b.name,
        date : b.date,
        departure : b.departure,
        arrival : b.arrival,
        location : b.location
    }}).then(() => res.status(200).json(Flight))
    .catch((error) => {
        res.status(400).json(error);
    });

});

routes.delete('/flights/:id', function (req, res) {

    Flight.remove({"_id" :flight._id})
            .then( res.status(200).json('OK'))
        .catch(res.status(400).json(error));
    });


module.exports = routes;