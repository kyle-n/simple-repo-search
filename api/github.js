import express from 'express';
import {githubConnector} from '../external-connectors';

const router = express.Router();

export const searchRepos = async (req, resp) => {
  try {
    const githubResp = await githubConnector.searchRepos(req._parsedUrl.query);
    return resp.json(githubResp.data);
  } catch (err) {
    return resp.send({err});
  }
};

router.get('/search', searchRepos);

export default router;
