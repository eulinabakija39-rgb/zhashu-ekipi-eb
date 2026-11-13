const express = require('express');
const cors = require('cors');

const studentRoutes = require('./routes/student.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware globale
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Kontroll i shpejtë që serveri është aktiv
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Routes sipas entitetit
app.use('/api/studentet', studentRoutes);
// TODO (studentët): shtoni routes për entitetet tjera, p.sh.
// app.use('/api/lendet', lendaRoutes);
// app.use('/api/profesoret', profesorRoutes);

// 404 për çdo route që nuk ekziston
app.use((req, res) => res.status(404).json({ message: 'Route nuk u gjet' }));

// Trajtimi qendror i gabimeve
app.use(errorHandler);

module.exports = app;
