import express from 'express';
import { json } from "body-parser";
import healthRouter from './routes/health'

const app = express()

app.use(json());

app.use("/health", healthRouter);

export default app;