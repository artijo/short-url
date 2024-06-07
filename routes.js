import express from 'express';

import { getAllLinks, getLinkBySlug } from './controllers/linksController.js';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/links', getAllLinks);
router.get('/:slug', getLinkBySlug);

export default router;
