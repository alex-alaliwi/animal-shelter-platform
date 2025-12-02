import express from 'express';
import { json } from "body-parser";
import healthRouter from './routes/health'
import { logger } from './middleware/logger';
import animalsRouter from './routes/animals';

const app = express()

app.use(json());
app.use('/api/animals', animalsRouter);
app.use(logger);

app.use("/health", healthRouter);

export default app;