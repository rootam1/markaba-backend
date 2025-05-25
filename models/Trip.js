const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  driverId: mongoose.Schema.Types.ObjectId,
  riderId: mongoose.Schema.Types.ObjectId,
  fromCity: String,
  toCity: String,
  date: Date,
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
  parcel: Boolean,
  price: Number
});

module.exports = mongoose.model('Trip', tripSchema);
