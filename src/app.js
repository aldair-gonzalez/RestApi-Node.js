import express from 'express';

import './config.js';
import { PORT } from './config.js';

import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
const app = express();

app.use(express.json());
app.use('/api', employeesRoutes);

app.use(indexRoutes);
app.use(employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found',
    });
});

export default app;