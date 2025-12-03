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