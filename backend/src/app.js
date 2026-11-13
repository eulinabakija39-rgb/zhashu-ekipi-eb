const express = require('express');
const cors = require('cors');

const eventRoutes = require('./routes/event.routes');
const userRoutes = require('./routes/user.routes');
const registrationRoutes = require('./routes/registration.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.use('/api/event', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/registrations', registrationRoutes);

app.use(errorHandler);

module.exports = app;
