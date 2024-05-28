const express = require('express');
const mongoose = require('mongoose');
const verifyToken = require('./middlewares/auth');
require('dotenv').config(); // Ensure you have this package installed with `npm install dotenv`
const userRoutes = require('./routes/usersRoutes');
const AuthRoutes = require('./routes/AuthRoutes')

// Create an Express application
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB Atlas connection URI from environment variables
const uri = process.env.MONGODB_URI || 'mongodb+srv://Arsalan_2001:KI1aRpQbL1J4gfBa@cluster0.bv1tz8o.mongodb.net/webtask?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas', err);
});

app.use('/users', verifyToken ,userRoutes);
app.use('/auth',AuthRoutes)

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
