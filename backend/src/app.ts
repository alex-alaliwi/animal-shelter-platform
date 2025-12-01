import express from 'express';
import { json } from "body-parser";
import healthRouter from './routes/health'
import { logger } from './middleware/logger';

const app = express()

app.use(json());
app.use(logger);

app.use("/health", healthRouter);

export default app;