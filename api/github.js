import express from 'express';
import {githubConnector} from '../external-connectors';

const router = express.Router();

const searchRepos = async (req, resp) => {
  return await githubConnector.searchRepos(req._parsedUrl.query);
};

router.get('/search', searchRepos);

export default router;
