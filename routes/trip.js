const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');

router.post('/create', async (req, res) => {
  const trip = new Trip(req.body);
  await trip.save();
  res.send(trip);
});

router.get('/', async (req, res) => {
  const trips = await Trip.find();
  res.send(trips);
});

router.post('/status', async (req, res) => {
  const { id, status } = req.body;
  const trip = await Trip.findByIdAndUpdate(id, { status }, { new: true });
  res.send(trip);
});

module.exports = router;
