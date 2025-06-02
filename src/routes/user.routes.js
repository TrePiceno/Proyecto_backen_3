import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const users = await userModel.find();
        res.status(200).send({ status: 'success', payload: users });
    } catch (error) {
        res.status(400).json({ message: error });
    }

});

export default router;