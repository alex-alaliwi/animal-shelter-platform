import { Router, Request, Response } from "express";
import { getAllAnimals } from "../services/animal.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const data = getAllAnimals();
  res.json({ animals: data });
});

export default router;
