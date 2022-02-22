import { Router } from 'express';
import { Request, Response } from "express";

import {
    GenerateRandomText,
    Validate
} from './cases';

const router = Router();

router.get('/en-random', GenerateRandomText.getEnglishText);
router.post('/validate', Validate.calculateAssertions);

export default router;
