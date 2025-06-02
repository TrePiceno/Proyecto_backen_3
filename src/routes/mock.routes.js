import { Router } from 'express';
import {generateMockUsers, generateMockPets} from '../utils/mocking.js';
import userModel from '../models/user.model.js';
import petModel from '../models/pet.model.js';

const router = Router();

router.get('/mockingusers', (req, res) => {
    try {
        const users = generateMockUsers(50);
        return res.status(200).json({ status: 'success', users });
    } catch (error) {
        res.status(400).json({ error: 'cannot generate users' });
    }
});

router.get('/mockingpets', (req, res) => {
    try {
        const pets = generateMockPets(5);
        return res.status(200).json({ status: 'success', pets });
    } catch (error) {
        res.status(400).json({ error: 'cannot generate pets' });
    }
});

router.post('/generatedata', async (req, res) => {
    try {
        const { users, pets } = req.query;
        if (users < 0 || pets < 0) {
            return res.status(400).send({ status: 'error', error: 'Amounts must be greater than zero' });
        }
        const generatedUsers = await generateMockUsers(users);
        const generatedPets = await generateMockPets(pets);
        userModel.insertMany(generatedUsers);
        petModel.insertMany(generatedPets);

        res.status(200).json({
            status: 'success',
            message: `${generatedUsers.length} users and ${generatedPets.length} generated and inserted into the database.` });

    } catch (error) {
        res.status(400).json({ message: error });
    }

});

export default router;