const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const tripRoutes = require('./routes/trip');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/markaba', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
