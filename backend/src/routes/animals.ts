import { Router, Request, Response } from "express";
import { getAllAnimals, getAnimalById, addAnimal } from "../services/animal.service";

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
  const created = addAnimal(req.body);
  res.status(201).json({ animal: created });
});

export default router;
