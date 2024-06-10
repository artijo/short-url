import supabase from '../lib/supabase.js';
import { makeSlug } from '../helper.js';

const createLink = async (req, res) => {
  let { title ,slug, url } = req.body;
  if (!title || !url) {
    return res.status(400).json({ error: 'Please fill all the fields' });
  }
  if(url.indexOf('http') !== 0 && url.indexOf('https') !== 0) url = `https://${url}` ;
  if (!slug) slug = makeSlug(4);
  try{
    const { data, error } = await supabase
    .from('links')
    .select()
    .eq('slug', slug);
    if(data.length > 0){
      return res.status(400).json({ error: 'Slug already exists' });
    }
    await supabase
  .from('links')
  .insert([{ title, slug, url }])
  res.redirect('/admin');
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }


};

const updateLink = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .update(req.body)
  console.log(data)
};

const deleteLink = async (req, res) => {
    const { data, error } = await supabase
  .from('links')
  .delete()
  console.log(data)
};

const getLinkBySlug = async (req, res) => {
  const { data, error } = await supabase
    .from('links')
    .select()
    .eq('slug', req.params.slug);
  console.log(data)
  if (data.length === 0) {
    return res.status(404).json({ error: 'Link not found' });
  }
  // Redirect to the original URL
  res.redirect(data[0].url);
};

export { createLink, updateLink, deleteLink, getLinkBySlug };