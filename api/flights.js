var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var FlightWrite = require('../model/flightWrite.model');
var FlightRead = require('../model/flightRead.model');


routes.get('/flights', function (req, res) {
    res.contentType('application/json');

    FlightRead.find({})
        .then(function (flights) {
            res.status(200).json(flights);
        })
        .catch((error) => {
        res.status(400).json(error);
    });
});


routes.get('/flights/:id', function (req, res) {
    res.contentType('application/json');
    FlightRead.findOne({ _id: req.params.id })
        .then(function (flights) {
            res.status(200).json(flights);
        })
        .catch((error) => {
        res.status(400).json(error);
    });
});


routes.post('/flights', function (req, res) {
    const b = req.body;

    const flight = new FlightWrite({

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

    const flight = new FlightWrite({
        name: b.name,
        date : b.date,
        departure : b.departure,
        arrival : b.arrival,
        location : b.location
    });
    FlightWrite.findOneAndUpdate({ _id: flight._id }, { $set: {
        name: b.name,
        date : b.date,
        departure : b.departure,
        arrival : b.arrival,
        location : b.location
    }}).then(() => res.status(200).json(Flight))
    .catch((error) => {
        res.status(400).json(error);
    });

routes.put('/flights/:id', (req, res, next) => {
    const flightId = req.params.id;
    const flightProps = req.body;

    FlightWrite.findByIdAndUpdate({
        _id: flightId
    }, flightProps)
        .then(() => Flight.findById({ _id: flightId }))
        .then((flight) => res.status(202).json(flight))
        .catch(next);
});

routes.delete('/flights/:id', (req, res, next) => {
  const flightId = req.params.id;

    FlightWrite.remove({"_id" :flight._id})
            .then( res.status(200).json('OK'))
        .catch(res.status(400).json(error));
    });
  Flight.remove({ _id: flightId })
    .then(() => {
        res.status(204).send();
    })
    .catch(next);
});


module.exports = routes;
