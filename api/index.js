import express from 'express';

import {default as githubRouter} from './github';

const router = express.Router();
router.use('/github', githubRouter);

export default router;
