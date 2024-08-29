const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Correct path to the auth routes

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// Use auth routes for handling sign-up and login
app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
