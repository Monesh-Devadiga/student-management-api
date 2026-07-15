const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Student Management API',
    version: '1.0.0',
    endpoints: {
      create: 'POST /api/students',
      getAll: 'GET /api/students',
      getById: 'GET /api/students/:id',
      update: 'PUT /api/students/:id',
      partialUpdate: 'PATCH /api/students/:id',
      delete: 'DELETE /api/students/:id',
    },
  });
});

app.use('/api/students', studentRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
