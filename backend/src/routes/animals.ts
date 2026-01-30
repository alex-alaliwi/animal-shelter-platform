import { Router, Request, Response } from "express";
import {
  getAllAnimals,
  getAnimalById,
  addAnimal,
} from "../services/animal.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const data = getAllAnimals();
  res.json({ animals: data });
});

router.get("/:id", (req: Request, res: Response) => {
  const animal = getAnimalById(req.params.id);

  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }

  res.json({ animal });
});

router.post("/", (req: Request, res: Response) => {
  const { name, species, age, status } = req.body;

  if (!name || !species || typeof age !== "number" || !status) {
    return res.status(400).json({
      message: "Invalid animal data",
    });
  }

  if (status !== "available" && status !== "adopted") {
    return res.status(400).json({
      message: "Invalid status value",
    });
  }

  const created = addAnimal({ name, species, age, status });

  res.status(201).json({ animal: created });
});

export default router;
