import { Animal } from "../models/animal.model";

const animals: Animal[] = [
  {
    id: "1",
    name: "Bella",
    species: "dog",
    age: 3,
    status: "available",
  },
  {
    id: "2",
    name: "Milo",
    species: "cat",
    age: 2,
    status: "available",
  },
];

export function getAllAnimals(): Animal[] {
  return animals;
}

export function getAnimalById(id: string): Animal | undefined {
  return animals.find((a) => a.id === id);
}

export function addAnimal(animal: Animal) {
  const newAnimal: Animal = {
    ...animal,
    id: Date.now().toString(),
  };
  animals.push(newAnimal);
  return newAnimal;
}
