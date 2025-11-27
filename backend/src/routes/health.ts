import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

export default router;
