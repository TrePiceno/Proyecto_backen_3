import { createHash } from "./utils.js";
import { faker } from "@faker-js/faker";

export const generateMockUsers = (quantity) => {
    const users = [];
    for (let i = 0; i < quantity; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password:  createHash('coder123'),
            role: Math.random() < 0.5 ? 'user' : 'admin',
            pets: [],
        };
        users.push(user);
    }
    return users;
};

export const generateMockPets = (quantity) => {
    const pets = [];
    for (let i = 0; i < quantity; i++) {
        const pet = {
            name: faker.animal.petName(),
            specie: faker.animal.dog(),
            age: faker.date.birthdate({ mode: 'age', min: 1, max: 15 }),
            owner: null,
        };
        pets.push(pet);
    }
    return pets;
};