import express from 'express';

import {default as repoRouter} from './repos';

const router = express.Router();
router.use('/repos', repoRouter);

export default router;
