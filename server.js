const express = require('express');
//import express from 'express';
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Public login route
app.use('/login', authRoutes);

// Protected user routes (optional: add auth middleware here)
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});