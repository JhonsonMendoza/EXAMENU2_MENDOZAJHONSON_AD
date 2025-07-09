const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./api/routes/auth.routes');
const taskRoutes = require('./api/routes/task.routes');

const app = express();
app.use(express.json());

// ⚙️ Parámetros manuales
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/tododb';
const JWT_SECRET = 'clave-super-secreta'; // solo si lo usas en otros archivos

// Rutas primero
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Conexión a MongoDB y luego arrancamos el servidor
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
