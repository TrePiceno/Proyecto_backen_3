import { Router } from "express";
import petModel from "../models/pet.model.js";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const pets = await petModel.find();
        res.status(200).send({ status: 'success', payload: pets });
    } catch (error) {
        res.status(400).json({ message: error });
    }

});

export default router;