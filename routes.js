import express from 'express';
import supabase from './lib/supabase.js';

import { getAllLinks, getLinkBySlug } from './controllers/linksController.js';
import { dashboard, login } from './controllers/adminController.js';

import { checkAuth } from './Middleware.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});


router.get('/login', async (req, res) => {
  res.render('login');
});
router.post('/login', login);

router.get('/links', getAllLinks);
router.get('/admin', checkAuth ,dashboard);
router.get('/:slug', getLinkBySlug);

export default router;
